const Issue = require('../models/Issue');
const sendEmail = require('../utils/sendEmail');

// Create issue
const createIssue = async (req, res) => {
  const { title, description, category, priority } = req.body;
  const issue = new Issue({ title, description, category, priority, user: req.user._id });
  await issue.save();
  // Optional: send email notification
  sendEmail(req.user.email, 'Issue Created', `Your issue "${title}" has been submitted`);
  res.status(201).json(issue);
};

// Get all issues
const getIssues = async (req, res) => {
  const issues = await Issue.find().populate('user', 'name email').populate('assignedTo', 'name email');
  res.json(issues);
};

// Update issue
const updateIssue = async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  if (!issue) return res.status(404).json({ message: 'Issue not found' });
  Object.assign(issue, req.body);
  await issue.save();
  res.json(issue);
};

module.exports = { createIssue, getIssues, updateIssue };

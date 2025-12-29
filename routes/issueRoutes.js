const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const { createIssue, getIssues, updateIssue } = require('../controllers/issueController');
const router = express.Router();

router.post('/', protect, createIssue);
router.get('/', protect, getIssues);
router.put('/:id', protect, admin, updateIssue);

module.exports = router;

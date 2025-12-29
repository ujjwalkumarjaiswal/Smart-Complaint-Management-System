# Smart-Complaint-Management-System
A platform for managing complaints and issues in organizations like government offices, colleges, or societies. Users can report issues such as water, electricity, roads, or hostel problems, and admins can track, assign, and resolve them efficiently.

Key Features:

✅ User & Admin Authentication using JWT

✅ Issue Categorization with priority system (High/Medium/Low)

✅ Status Tracking: Pending → In Progress → Resolved

✅ Image Upload for proof of issues

✅ Comment & Update Timeline for each complaint

✅ Email Notifications for updates

Tech Stack:

Backend: Node.js + Express.js

Database: MongoDB

Authentication: JWT

File Storage: Local storage

Notifications: Nodemailer


Smart-Complaint-Management-System/
│
├── backend/
│   ├── controllers/        
│   │   ├── authController.js
│   │   ├── issueController.js
│   │   └── userController.js
│   │
│   ├── models/             
│   │   ├── Issue.js
│   │   └── User.js
│   │
│   ├── routes/             
│   │   ├── authRoutes.js
│   │   ├── issueRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── middleware/         
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/              
│   │   ├── sendEmail.js
│   │   └── uploadImage.js
│   │
│   ├── config/            
│   │   └── db.js
│   │
│   ├── server.js          
│   └── .env                
│
├── frontend/               
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── .gitignore
├── package.json
└── .env

# Intern Verification System – Backend

Backend API service for the Intern Verification System.  
This application provides secure authentication, intern data management, and verification APIs for HR operations.

---

## 🚀 Live API

Backend Deployment:  
https://intern-verification-backend.vercel.app

---

## 📌 Project Overview

The backend is built using Node.js, Express.js, and MongoDB Atlas.  
It handles:

- HR Authentication
- JWT Authorization
- Intern Record Management
- Verification APIs
- Secure Password Hashing
- Database Connectivity

---

## ✨ Features

- Secure HR Registration & Login
- JWT-based Authentication
- Protected Routes
- MongoDB Atlas Integration
- RESTful APIs
- Password Encryption using bcryptjs
- CORS Configuration
- Environment Variable Protection
- Deployment on Vercel

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| CORS | Cross-Origin Requests |
| dotenv | Environment Variables |

---

## 📂 Folder Structure

```txt
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authControllers.js
│   └── internControllers.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Intern.js
│
├── routes/
│   ├── authRoutes.js
│   └── internRoutes.js
│
├── .env
├── package.json
└── server.js

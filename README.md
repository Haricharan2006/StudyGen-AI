# 📚 StudyGen AI

An AI-powered study assistant that helps students generate **Notes, Flashcards, Quizzes, and Summaries** instantly using **Groq AI**. The application provides secure user authentication, stores generated study materials, and offers a responsive user interface for seamless learning across devices.

---

## 🚀 Live Demo

### Frontend
https://studygen-frontend.onrender.com

### Backend
https://studygen-backend-nqxi.onrender.com

### Short Screening Explanation Video
https://drive.google.com/file/d/1gE-r8bM8gZnN58cSUb06TYx9I6BQd2J5/view?usp=sharing

---

# 📖 Table of Contents

- Introduction
- Features
- Tech Stack
- System Architecture
- Project Structure
- Website Workflow
- Website Pages
- Installation
- Environment Variables
- Running the Project
- API Endpoints
- Authentication
- Database
- Responsive Design
- Future Enhancements
- Contributing
- License
- Author

---

# 📌 Introduction

StudyGen AI is a MERN Stack web application that leverages Google Gemini AI to generate study materials automatically from a user-provided topic. Instead of spending hours preparing notes or quizzes manually, students can generate learning content within seconds.

The application provides secure authentication, organized history management, and multiple study formats, making learning more efficient and interactive.

---

# ✨ Features

- 🔐 User Authentication (Signup/Login)
- 📝 AI Generated Notes
- 🧠 AI Flashcards
- ❓ AI Quiz Generation
- 📄 AI Summary Generation
- 📚 History Management
- 📋 Copy Generated Content
- 📥 Download Generated Content
- 📱 Fully Responsive Design
- ⚡ Fast Performance
- 🔒 Secure JWT Authentication

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Authentication

- JWT (JSON Web Token)

## AI

- Groq AI

## Deployment

- Render

---

# 🏗 System Architecture

User

↓

React Frontend

↓

Express Backend API

↓

Groq AI

↓

MongoDB Database

↓

Frontend Displays Generated Content

---

# 📁 Project Structure

```
StudyGen-AI/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── App.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── package.json
```

---

# 🌐 Website Workflow

```
Home Page

↓

Signup

↓

Login

↓

Dashboard

↓

Generate Study Material

↓

Groq AI

↓

Results Page

↓

History

↓

Generate Again
```

---

# 🖥 Website Pages

## 🏠 Home Page

The Home page introduces users to StudyGen AI.

### It contains

- Responsive Navigation Bar
- Hero Section
- Features Section
- How It Works Section
- Why Choose Us Section
- Call To Action Section

### Purpose

The page provides an overview of the application and encourages users to register or log in.

---

## 👤 Signup Page

The Signup page allows new users to create an account.

### It contains

- Name
- Email
- Password
- Create Account Button

### Purpose

Registers a new user and redirects them to the Login page after successful registration.

---

## 🔑 Login Page

The Login page authenticates existing users.

### It contains

- Email
- Password
- Login Button

### Purpose

After successful authentication, users are redirected to the Dashboard.

---

## 📊 Dashboard

The Dashboard is the main page after login.

### It contains

- Welcome Message
- Statistics Cards
- Recent Activity
- Quick Action Buttons

### Purpose

Provides quick access to all AI study generation features.

---

## 🤖 Generate Page

This is the core page of the application.

### It contains

- Topic Input
- Output Type Selection
- Generate Button

### Output Types

- Notes
- Flashcards
- Quiz
- Summary

### Purpose

The entered topic is sent to Google Gemini AI, which generates the requested study material.

---

## 📝 Results Page

Displays AI-generated notes.

### Features

- Topic Title
- Generated Notes
- Copy Button
- Download Button
- Generate Again Button

### Purpose

Allows users to read, copy, and download generated notes.

---

## 🧠 Flashcards Page

Displays AI-generated flashcards.

### Features

- Interactive Flashcards
- Previous Button
- Next Button
- Progress Indicator
- Copy Button
- Download Button

### Purpose

Helps students revise concepts through interactive question-and-answer cards.

---

## ❓ Quiz Page

Displays AI-generated multiple-choice questions.

### Features

- MCQs
- Progress Bar
- Answer Selection
- Score Calculation
- Final Result
- Restart Quiz

### Purpose

Allows students to test their understanding of a topic.

---

## 📄 Summary Page

Displays AI-generated summaries.

### Features

- Summary Content
- Copy Button
- Download Button
- Generate Again

### Purpose

Provides concise study material for quick revision.

---

## 📚 History Page

Displays previously generated study materials.

### Features

- Search
- View Previous Content
- Delete History
- Date & Time
- Type Badge

### Purpose

Users can revisit their previously generated study materials without generating them again.

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/Haricharan2006/StudyGen-AI
```

Go into the project

```bash
cd StudyGen-AI
```

Install frontend dependencies

```bash
cd frontend
npm install
```

Install backend dependencies

```bash
cd ../backend
npm install
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

For deployment on Render, update:

```env
VITE_API_URL=https://studygen-backend-nqxi.onrender.com
```

---

# ▶ Running the Project

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

Backend runs at:

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/signup

POST /api/auth/login
```

## AI Generation

```
POST /api/generate
```

## History

```
GET /api/history

DELETE /api/history/:id
```

---

# 🔒 Authentication

The application uses JWT authentication.

Workflow:

- User logs in
- Backend verifies credentials
- JWT Token is generated
- Token is stored on the client
- Protected API requests include the token
- Backend validates the token before processing requests

---

# 🗄 Database

MongoDB stores:

- User Details
- Encrypted Passwords
- Generated Notes
- Flashcards
- Quizzes
- Summaries
- User History

---

# 📱 Responsive Design

The application is fully responsive using Tailwind CSS.

Supported Devices:

- Mobile
- Tablet
- Laptop
- Desktop

Responsive improvements include:

- Flexible Layouts
- Responsive Typography
- Adaptive Grid System
- Mobile-Friendly Navigation
- Optimized Buttons and Cards

---

# 🚀 Future Enhancements

- PDF Export
- Dark Mode
- Voice Input
- Multi-language Support
- Study Analytics Dashboard
- AI Study Planner
- Image Generation Support
- Collaborative Study Groups

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Haricharan Jammula**

B.Tech Student | MERN Stack Developer | AI Enthusiast

---

# ⭐ Conclusion

StudyGen AI is an intelligent learning platform that simplifies studying by generating AI-powered Notes, Flashcards, Quizzes, and Summaries. Built using the MERN Stack and Google Gemini AI, the application provides secure authentication, responsive design, and an intuitive interface that enables students to generate, save, and manage study materials efficiently.
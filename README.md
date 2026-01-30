# ✨ CodeConnect

CodeConnect is a real-time collaborative coding platform that enables multiple users to code together using a shared editor, live chat, and video rooms. It supports pair programming, technical interviews, and guided coding sessions with secure auth and automated code execution.

---

## 🔗 Live Demo

🔗 code-connect-theta-eight.vercel.app/

---

## 🚀 Features

- 🧠 VSCode-powered code editor  
- 👤 Authentication via Clerk  
- 🎥 1-on-1 video interview rooms  
- 📊 Live dashboard with interview stats  
- 💬 Real-time chat messaging  
- 🔐 Secure code execution in an isolated sandbox  
- 🚀 Auto success/fail feedback based on test cases  
- 🎉 Confetti on success and notifcations on failure  
- 🌐 Practice coding problems page  
- 🔒 Room locking for privacy  
- ⚡ Background jobs with Inngest  
- 📡 Efficient REST API with Node.js & Express  
- 🧩 Data fetching & caching via TanStack Query  
- ⚙️ Code review suggestions using CodeRabbit  
- 📦 Deployable on Vercel

---

## 🧱 Tech Stack

### 🖥️ Frontend
- React  
- Vite  
- Tailwind CSS  
- Clerk for authentication  
- React Router  
- TanStack Query  
- Stream for video calls and chat messaging
- VSCode editor integration

### 🗄️ Backend
- Node.js  
- Express  
- MongoDB  
- Inngest for background jobs  
- Stream for real-time feeds  
- Isolated code execution environment

---

## 📁 Project Structure
```
CodeConnect/
├── backend/       # Express Backend
│   ├── src/
│       ├── controllers
│       ├── lib
│       ├── middleware
│       ├── models
│       ├── routes
│       └── server.js
│
├── frontend/       # React Frontend
│   ├── src/
│       ├── api
│       ├── components
│       ├── data
│       ├── hooks
│       ├── lib
│       └── pages
```
---

## 🛠️ Getting Started

These instructions will help you run the project locally.

### 🎯 Prerequisites

Make sure you have:

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (Atlas)
- Clerk account (for auth keys)
- Stream API keys
- Inngest keys

---

### 📦 Installation

Clone the repo:

```bash
git clone https://github.com/RachitJ05/CodeConnect.git
cd CodeConnect
```

Install backend dependencies:
```bash
cd backend
npm install
```

Install frontend dependencies:
```bash
cd frontend
npm install
```

### 🔧 Environment Variables

✨ Backend (backend/.env)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

✨ Frontend (frontend/.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

### Run Locally

```bash
cd backend && npm run dev
cd frontend && npm run dev
```

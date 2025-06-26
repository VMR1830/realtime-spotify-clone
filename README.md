
# 🎵 Music Streaming Web App

A full-stack music streaming platform built with the MERN stack + Clerk for authentication and Zustand for state management. Users can stream, manage, and interact with songs and albums in real time using Socket.IO.

## 🚀 Features

- 🎧 Stream featured, trending, and personalized "Made For You" songs
- 🧑‍💼 Admin-only song/album management (add, delete)
- 📊 Dashboard with user, album, and song stats
- 🔐 Secure authentication using Clerk
- 🧠 Global state management using Zustand
- 💬 Real-time user presence and activity (Socket.IO)
- 🧹 Temp file cleanup with Cron Jobs
- 🖼️ Image & audio uploads using `express-fileupload` and Cloudinary
- 📦 Production-ready build (frontend in React + Vite)

## 🛠️ Tech Stack

**Frontend**: React, Vite, TailwindCSS, Zustand, TypeScript  
**Backend**: Node.js, Express.js, MongoDB, Mongoose, Socket.IO  
**Authentication**: Clerk  
**File Handling**: express-fileupload, Cloudinary  
**Others**: nodemon, dotenv, cors, node-cron

## 📁 Folder Structure

```
root/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── stores/
│   │   ├── lib/
│   │   └── main.tsx
│   └── vite.config.ts
├── README.md
└── package.json
```

## 🔧 Installation

### 1. Clone the Repo

```bash
git clone https://github.com/VMR1830/realtime-spotify-clone.git
cd music-app
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Environment Variables

#### Backend `.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://vmr181530:FnJ5GwwwBc4aIOWW@cluster0.lojkqr2.mongodb.net/spotify_db?retryWrites=true&w=majority&appName=Cluster0
ADMIN_EMAIL=vmr181530@gmail.com

CLOUDINARY_API_KEY=913371812794165
CLOUDINARY_API_SECRET=LH-FWkJT-dTTVn_s8QWJoPId3F4
CLOUDINARY_CLOUD_NAME=ddieqxbxu
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=pk_test_aW52aXRpbmctYm9iY2F0LTE1LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_wBJzaSfvg3B0icP3YHdqJ8cFsa27zWHg0ypupYqXvK
```

### 4. Seed Sample Songs

```bash
npm run seed:songs
```

### 5. Start Dev Servers

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

## 📸 Screenshots

Coming soon...

## 🧑‍💻 Author

Made by Vedant Mudiraj

---

Feel free to contribute or raise an issue for any feature suggestions or bugs.

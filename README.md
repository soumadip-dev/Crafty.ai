<h1 align="center">
  <br>
  Crafty.ai ✨
  <br>
</h1>

<p align="center">
  An AI-powered SaaS platform offering creative and productivity tools.
</p>

<div align="center">
  <img src="https://github.com/soumadip-dev/Crafty.ai-PERN/blob/main/client/src/assets/SS.png" alt="Crafty.ai screenshot" width="900">
</div>

## 🌐 Live Demo

[crafty.ai](https://crafty-ai.vercel.app/)

## 🌟 Features

- **📝 Article Generator** – Generate full articles from titles
- **💡 Blog Title Generator** – Create engaging blog titles
- **🖼 AI Image Generator** – Generate images from text prompts
- **🖌 Background Remover** – Remove image backgrounds easily
- **❌ Image Object Remover** – Remove unwanted objects from images
- **📄 Resume Analyzer** – Analyze and suggest resume improvements

## ⚙️ Tech Stack

- **🎨 Frontend**: React.js, Tailwind CSS
- **🚀 Backend**: Node.js, Express.js
- **🤖 AI Services**: Gemini API, ClipDrop API
- **💾 Storage**: Cloudinary
- **🔐 Authentication**: Clerk
- **🗄 Database**: MongoDB, Mongoose

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/soumadip-dev/Crafty.ai-MERN.git
cd Crafty.ai-MERN
```

2. **Frontend Setup**

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key_here
VITE_BASE_URL=http://localhost:3000
```

3. **Backend Setup**

```bash
cd ../server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=8080
DATABASE_URL=<YOUR_MONGODB_URI>
CLERK_PUBLISHABLE_KEY=<YOUR_KEY_HERE>
CLERK_SECRET_KEY=<YOUR_KEY_HERE>
GEMINI_API_KEY=<YOUR_KEY_HERE>
CLIPDROP_API_KEY=<YOUR_KEY_HERE>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_KEY_HERE>
CLOUDINARY_API_SECRET=<YOUR_SECRET_HERE>
```

4. **Run the Application** 🚀

- **Frontend (Terminal 1)**:

```bash
cd client
npm run dev
```

- **Backend (Terminal 2)**:

```bash
cd server
npm run dev
```

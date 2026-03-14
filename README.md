# TaskFlow - Task Management App
TaskFlow is a full-stack MERN-based Task Management Application that helps users create, update, and manage tasks efficiently. It comes with authentication, role-based access, and a modern responsive UI.

---

## Live Demo
- Frontend: TaskFlow Frontend: https://taskflow-frontend-fbvt.onrender.com/
- Backend (API): TaskFlow Backend: https://taskflow-backend-a9c7.onrender.com

---

## Features
- ✅ User Authentication (Login & Signup)  
- ✅ Create, Edit, Delete Tasks  
- ✅ Mark Tasks as Completed / In Progress / Pending  
- ✅ Real-time Updates (via React state)  
- ✅ Role-based Dashboard (Admin/User)  
- ✅ Responsive UI with TailwindCSS & ShadCN UI  
- ✅ REST API built with Express & MongoDB  

---

## Tech Stack
**Frontend**
- React (Vite)
- React Router
- Axios
- TailwindCSS + ShadCN UI
- Lucide Icons

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt.js (password hashing)
- CORS

---

## Project Structure
TaskFlow/
│── backend/     # Express + MongoDB API
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
│
│── frontend/     # React + Vite app
│ ├── src/
│ └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json

---

## Setup Instructions

### 1️ Clone the repository
git clone https://github.com/your-username/taskflow.git
cd taskflow

2️ Setup Backend
cd backend
npm install

Create a .env file inside backend/:
PORT=4000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

Start the backend:
npm start

3️⃣ Setup Frontend
cd ../frontend
npm install

4️⃣ Setup Frontend
cd ../frontend
npm install

Start the frontend:
npm run dev


🌐 Local Development
Frontend: http://localhost:5173
Backend: http://localhost:4000

📜 License
This project is licensed under the MIT License.

👨‍💻 Author
- Harshit Kumar Mishra
- GitHub: https://github.com/Harshit-1264
- LinkedIn: https://www.linkedin.com/in/harshitkm-/

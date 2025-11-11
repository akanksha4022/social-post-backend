


# 🧾 BACKEND — `backend/README.md`


# ⚙️ Social Post App — Backend

This is the **backend API** for the Mini Social Post Application.  
Built with **Node.js, Express, and MongoDB Atlas**, it handles user authentication, post creation, likes, and comments.



## 🚀 Features

- 👤 User Signup & Login (with hashed passwords)
- 📝 Create text/image posts
- ❤️ Like & 💬 Comment functionality
- 🌍 Public feed endpoint for all posts
- 🧩 MongoDB Atlas for data persistence

---

##  🛠 Tech Stack

| Layer | Technology |
|--------|-------------|
| Server | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| ORM | Mongoose |
| Password Security | bcryptjs |
| Deployment | Render |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```
git clone https://github.com/akanksha-singh/social-post-backend.git
cd social-post-backend
```

### 2️⃣ Install dependencies
npm install

### 3️⃣ Create a .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

### 4️⃣ Run the server
npm start


## API ENDPOINTS

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| `POST` | `/api/users/signup`  | Register a new user     |
| `POST` | `/api/users/login`   | Login user              |
| `POST` | `/api/posts/create`  | Create a new post       |
| `GET`  | `/api/posts/feed`    | Get all posts           |
| `POST` | `/api/posts/like`    | Like or unlike a post   |
| `POST` | `/api/posts/comment` | Add a comment to a post |

## ☁️ Deployment

#### Deployed on Render
👉 https://social-post-api-qoqg.onrender.com

Connected to MongoDB Atlas.

## 🧠 Notes

Passwords are hashed using bcryptjs

Basic auth 

Use two collections only: users and posts

Likes and comments update instantly

## 👩‍💻 Author

Akanksha Singh





The backend will start on
👉 http://localhost:5000

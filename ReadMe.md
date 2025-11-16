# project-06-mongo-training
### Beginner-Friendly MongoDB + Node.js Starter Project (Created for Learning & Practice)

This project is a clean, minimal, best-practice starter template for learning Node.js, MongoDB, and Mongoose.  
It was created as part of a step-by-step backend training journey.

The goal of this project is to help beginners understand:

- How to structure a Node.js project  
- How to use environment variables  
- How to connect to MongoDB Atlas  
- How to use ES Modules (`import`)  
- How to use the latest Mongoose connection syntax  
- How to follow GitHub best practices  

---

## 🚀 Features

✔ Uses **Node.js (ES Modules)**  
✔ Uses **Mongoose v8+** (latest)  
✔ Clean, isolated MongoDB connection file  
✔ Secure configuration with **dotenv**  
✔ Meaningful project scripts (`npm run dev`)  
✔ Beginner-friendly error handling  
✔ Follows professional folder structure  
✔ Includes a `.env.example` file (industry standard)  
✔ `.gitignore` prevents secrets & massive folders from being pushed  

---

## 📂 Project Structure

```
project-06-mongo-training/
│
├── index.js              # Entry point
├── connectDb.js          # MongoDB connection logic
│
├── package.json          # Project metadata + dependencies
├── .env                  # Private secrets (ignored by Git)
├── .env.example          # Safe template for developers
├── .gitignore            # Files Git should ignore
│
└── node_modules/         # Dependencies (never pushed to Git)
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/usmanbankagmail/project-06-mongo-training.git
cd project-06-mongo-training
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create your `.env` file
Copy `.env.example` → `.env` and add your MongoDB connection string:

`.env`
```
MONGODB_URI = your-mongodb-connection-string-here
```

⚠️ Never push your real .env file to GitHub.  
This project is already configured to ignore it.

---

## ▶ Running the Project

Start with auto-restart on changes:

```sh
npm run dev
```

You should see:

```
Congratulations! MongoDB Connected Successfully!
```

If there's an error, you will see a detailed message such as:

```
Sorry, MongoDB couldn't connect due to the following error:
Invalid connection string
```

---

## 🔌 How the Database Connection Works

### 👉 index.js
```js
import { connectDB } from "./connectDb.js";

connectDB();
```

### 👉 connectDb.js
```js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Congratulations! MongoDB Connected Successfully!");
        process.exit(0);
    }
    catch(error) {
        console.log("Sorry, MongoDB couldn't connect due to the following error:");
        console.error(error.message);
        process.exit(1);
    }
}
```

### ⭐ Explanation

- Loads environment variables using **dotenv**
- Uses the latest Mongoose `mongoose.connect()` syntax
- Uses `async/await`
- Shows beginner-friendly error messages
- Exits the process after success/failure (this project is only for testing the connection)

---

## 📘 .env.example (Best Practice)

```
MONGODB_URI = MongoDB Connection String obtained from MongoDB Atlas
```

Every real project should include this file so developers know which environment variables are required.

---

## 🔒 .gitignore

```
node_modules/
.env
```

✔ Prevents 200+ MB from being pushed  
✔ Protects secrets  
✔ Professional + correct  

---

## 📚 Author

**Muhammad Usman Banka**  
Batch-15 Backend Training Journey

---

## 🏁 Summary

This repository serves as your foundational MongoDB + Node.js starter.  
It follows best practices, uses modern syntax, and prepares you for advanced topics like Aggregation Pipelines.

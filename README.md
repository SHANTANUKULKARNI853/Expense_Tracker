
# 💸 Expense Tracker App

A simple and powerful full-stack **Expense Tracker** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Users can sign up, log in, add, delete, and view expenses with summary charts — all in a secure, authenticated environment.

---

## 🚀 Live Demo

- 🔗 Frontend: [https://expense-tracker-alpha-six-96.vercel.app](https://expense-tracker-alpha-six-96.vercel.app)
---

## 📦 Tech Stack

### Frontend
- React.js (with functional components and hooks)
- Axios for API requests
- Chart.js for visualizing expenses
- CSS for styling
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- bcryptjs for password hashing
- dotenv for environment variables
- CORS for cross-origin requests

---

## 🔐 Features

- 🔒 Secure authentication using JWT
- 🧾 Add, delete and list expenses
- 📊 View summary and spending charts
- 📅 Track expenses by category and date
- 🎯 Responsive and user-friendly UI
- 🌐 Deployment-ready for Vercel (frontend) and Render (backend)

---

## 🧠 Project Structure

```

expense-tracker/
│
├── client/                  # React frontend
│   ├── components/          # ExpenseForm, ExpenseList, Charts, Sidebar, etc.
│   ├── styles/              # CSS modules
│   ├── App.js               # Main app file
│   └── ...
│
├── routes/
│   ├── auth.js              # Signup & Login routes
│   └── expenses.js          # Add, delete, fetch expenses
│
├── models/
│   ├── User.js              # User schema
│   └── Expense.js           # Expense schema
│
├── middleware/
│   └── authMiddleware.js    # JWT authentication
│
├── .env                     # Environment variables
├── index.js                 # Express app entry point
├── package.json             # Backend dependencies
└── README.md

````

---

## 🧪 Setup & Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/SHANTANUKULKARNI853/Expense_Tracker.git
cd Expense_Tracker
````

---

### 2. Setup Backend

```bash
npm install
```

Create a `.env` file in the root folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
PORT=5000
```

Then run the backend:

```bash
node index.js
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🚀 Deployment

### Frontend (Vercel)

* Push your client folder to GitHub.
* Go to [vercel.com](https://vercel.com), connect the GitHub repo, and deploy the frontend.

### Backend (Render)

1. Push your backend code to GitHub.
2. Go to [render.com](https://render.com), create a new web service.
3. Set build command as:

   ```
   npm install
   ```
4. Set start command as:

   ```
   node index.js
   ```
5. Add Environment Variables:

   * `MONGO_URI`
   * `JWT_SECRET`
   * `PORT` = 5000

---

## 📝 Author

**Shantanu Kulkarni**
🔗 [GitHub](https://github.com/SHANTANUKULKARNI853)

---

## 📃 License

This project is licensed under the MIT License.

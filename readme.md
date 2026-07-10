# 🏋️‍♂️ FitCode 

A full-stack fitness tracking web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) that allows users to log workouts, track progress, and manage their exercise routines.

![JavaScript](https://img.shields.io/badge/JavaScript-84.5%25-yellow)
![CSS](https://img.shields.io/badge/CSS-13.9%25-blue)
![HTML](https://img.shields.io/badge/HTML-1.6%25-orange)

---



---

## 📖 About the Project

**FitCode** is a full-stack workout tracking application that helps users log their exercises (title, reps, load/weight), view their workout history, and manage their fitness routines through a clean and simple interface. The backend exposes a REST API to create, read, update, and delete workout records, while the frontend provides an interactive dashboard for users to manage their data in real time.

---

## ✨ Features

- 📝 Create, view, update, and delete workout entries
- 📊 Track exercise details such as title, load (weight), and reps
- ⚡ Real-time UI updates after every CRUD action
- 🔗 RESTful API built with Express and MongoDB
- 🎨 Responsive frontend built with React
- 🗂️ Clean separation of concerns between frontend and backend

> **Note:** Depending on the current state of the repository, some features above may be in progress or planned. Refer to the source code for the most up-to-date functionality.

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router
- CSS3 / HTML5
- Fetch API / Axios (for HTTP requests)

**Backend**
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- dotenv (environment variable management)
- CORS

---

## 📁 Folder Structure

Below is the general folder structure used in this repository, following standard MERN stack conventions:

```
FitCode-Project/
│
├── Backend/                     
│   ├── controllers/
│   │   └── workoutController.js 
│   ├── models/
│   │   └── workoutModel.js      
│   ├── routes/
│   │   └── workouts.js          
│   ├── middleware/               
│   ├── .env                     
│   ├── server.js                
│   └── package.json
│
├── frontend/                    
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/         
│   │   ├── hooks/                
│   │   ├── context/              
│   │   ├── pages/                 
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env                     
│
├── readme.md                    
└── .gitignore
```

> ℹ️ This structure reflects the standard layout for MERN CRUD applications. Exact file/folder names may vary slightly — check the `Backend/` and `frontend/` directories directly in the repo for the current layout.

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints for managing workouts:

| Method   | Endpoint          | Description                  |
|----------|-------------------|-------------------------------|
| `GET`    | `/workouts`       | Get all workout documents     |
| `GET`    | `/workouts/:id`   | Get a single workout by ID    |
| `POST`   | `/workouts`       | Create a new workout document |
| `PATCH`  | `/workouts/:id`   | Update a workout by ID        |
| `DELETE` | `/workouts/:id`   | Delete a workout by ID        |


---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DEVARSHIP1707/FitCode-Project.git
   cd FitCode-Project
   ```

2. **Install backend dependencies**

   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file inside the `Backend/` folder with the following variables:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

If the frontend requires an API base URL, create a `.env` file inside the `frontend/` folder:

```env
REACT_APP_API_URL=http://localhost:4000
```

### Running the App

1. **Start the backend server**

   ```bash
   cd Backend
   npm run dev
   ```

   The server should now be running on `http://localhost:4000` (or the port specified in your `.env`).

2. **Start the frontend development server**

   In a separate terminal:

   ```bash
   cd frontend
   npm start
   ```

   The React app should now be running on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to use the app.

---

## 💻 Usage

1. Open the app in your browser.
2. Use the workout form to add a new exercise entry (title, load, reps).
3. View all logged workouts in the dashboard.
4. Edit or delete workout entries as needed.
5. Track your progress over time by reviewing your workout history.

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

Please make sure your code follows the existing style and includes relevant comments where necessary.

---


## 📬 Contact

**Author:** [DEVARSHIP1707](https://github.com/DEVARSHIP1707)
**Repository:** [FitCode-Project](https://github.com/DEVARSHIP1707/FitCode-Project)

For questions, suggestions, or issues, please open an [issue](https://github.com/DEVARSHIP1707/FitCode-Project/issues) on GitHub.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!

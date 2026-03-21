<!-- ------------ University project ------------- -->

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Frontend dev server: Vite
- Backend: Node.js, Express
- Database: MongoDB with Mongoose

## Prerequisites

Before running the project locally, make sure these are installed:

- Node.js 18+ and npm
- MongoDB Community Server
- Git

## Project Structure

- `index.html` and `frontend/`: frontend pages
- `backend/`: Express API and MongoDB models

## How To Run Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd shoe-house
```

### 2. Install project dependencies

```bash
npm install
```

If you want to install backend dependencies separately, you can also run:

```bash
cd backend
npm install
```

### 3. Create the backend environment file

Inside the `backend` folder, create a `.env` file with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoe-house
```

You can also copy the values from `backend/.env.example`.

### 4. Start MongoDB

Make sure your local MongoDB server is running before starting the backend.

### 5. Seed the database

From the `backend` folder, run:

```bash
node parser.js
```

This inserts the initial shoe data into MongoDB.

### 6. Start the backend server

Still inside `backend`, run:

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

### 7. Start the frontend

Open a new terminal in the project root and run:

```bash
npm run frontend
```

The frontend will usually run at:

```text
http://localhost:5173
```

### 8. Open the app

Open this page in your browser:

```text
http://localhost:5173/index.html
```

## Useful Notes

- The frontend currently calls the deployed API in some places unless changed in the frontend JavaScript files.
- If you want the whole app to use your local backend, update the API base URLs in:
  - `frontend/js/index.js`
  - `frontend/js/details.js`
  - `frontend/js/shoes.js`
  - `frontend/js/orders.js`
  - `frontend/js/add-item.js`
- Replace `https://online-shoe-house.onrender.com` with `http://localhost:5000`.

## Backend Scripts

From the `backend` folder:

```bash
npm run dev
```

Starts the backend with `nodemon`.

```bash
npm start
```

Starts the backend with Node.js.

## Root Scripts

From the project root:

```bash
npm run frontend
```

Starts the Vite frontend.

```bash
npm run backend
```

Starts the backend in a second shell through the root script.

```bash
npm run dev:all
```

Starts frontend and backend together.

## Author

Mykhailo Feniuk

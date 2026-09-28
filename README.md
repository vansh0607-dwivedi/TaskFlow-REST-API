# TaskFlow API

A RESTful Task Management API built with **Node.js, Express.js, and MongoDB**.
This project provides APIs to create, read, update, and delete tasks.

## Features

* Create a new task
* Get all tasks
* Get a task by ID
* Update a task
* Delete a task
* MongoDB database integration
* RESTful API architecture
* Input validation using Mongoose

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* JavaScript
* dotenv

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/tasks`     | Create a new task |
| GET    | `/api/tasks`     | Get all tasks     |
| GET    | `/api/tasks/:id` | Get a task by ID  |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Task Structure

```json
{
  "text": "Complete TaskFlow API",
  "completed": false
}
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/taskflow
```

Start the server:

```bash
node server.js
```

The API will run at:

```text
http://localhost:3000
```

## Testing

The API endpoints were tested using **Postman** and the database was verified using **MongoDB Compass**.

## Project Status

**Completed — CRUD operations are implemented and tested successfully.**

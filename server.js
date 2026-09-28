const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();

console.log("MONGODB_URI:", process.env.MONGODB_URI);

const connectDB = require("./src/db/connect");
const taskRoutes = require("./src/routes/taskRoutes");
const securityHeaders = require("./src/middleware/security");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();


// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(securityHeaders);

// Routes
app.use("/api/tasks", taskRoutes);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "TaskFlow API is running!"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// src/productAPI/server.js
import express from 'express';
import connectDB from './src/config/db.js';
import apiController from './src/productAPI/controllers/apiController.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to handle JSON requests
app.use(express.json());

// Route to fetch and save data
app.get('/api/fetch-and-save', apiController.fetchAndSaveData);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

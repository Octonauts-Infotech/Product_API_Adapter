// src/productAPI/routes/apiRoutes.js

import express from 'express';
import { saveApiData } from '../controllers/apiController.js';

const router = express.Router();

// Route to fetch and save API data
router.post('/save', saveApiData);

export default router;

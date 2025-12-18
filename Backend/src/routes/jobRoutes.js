import express from 'express';
import { getAllJobs, createJob } from '../controllers/jobController.js';
import auth from '../middleware/authmiddleware.js';

const router = express.Router();

// Public Route
router.get('/', getAllJobs);

// Protected Route
router.post('/', auth,createJob);

export default router;
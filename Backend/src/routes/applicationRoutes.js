import express from 'express';
import { applyForJob, getUserApplications } from '../controllers/applicationController.js';
import auth from '../middleware/authmiddleware.js';


import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Route: POST /api/applications/:jobId (Logic in controller)
router.post('/:jobId', [auth, upload.single('resume')], applyForJob);

// Route: GET /api/applications/my-applications
router.get('/my-applications', auth, getUserApplications);

export default router;
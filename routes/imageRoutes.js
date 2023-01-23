import express from 'express';
import { imageUpload } from '../controllers/imageController.js';

const router = express.Router();

router.post('/imageUpload', imageUpload);

export { router as imageRouter };
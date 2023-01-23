import express from 'express';
import { simpleService } from '../controllers/overviewController.js';

const router = express.Router();

router.get('/', simpleService);

export { router as defaultRouter };
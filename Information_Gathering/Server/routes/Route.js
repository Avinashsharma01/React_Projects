import express from 'express';
import { postMessage, getUser, getFaculty } from '../controllers/Controllers.js';

const router = express.Router();

router.post('/user/postMessage', postMessage);
router.get('/user', getUser);
router.get('/faculty', getFaculty);


export default router;
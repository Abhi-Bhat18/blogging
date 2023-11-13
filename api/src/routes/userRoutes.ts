import express from 'express'
import { viewProfile,viewUserProfile } from '../controllers/userControllers';
const router = express.Router();

router.get('/',viewProfile);
router.get('/:id',viewUserProfile);


export default router
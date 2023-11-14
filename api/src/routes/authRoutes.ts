import express from "express";
import {
  googleOAuthCallback,
  googleOAuthRedirect,
} from "../controllers/authControllers";
const router = express.Router();

router.get("/google", googleOAuthRedirect);
router.get("/google/callback",googleOAuthCallback);
router.get('/checklogin');


export default router;

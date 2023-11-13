import express from "express";
import {
  googleOAuthCallback,
  googleOAuthRedirect,
} from "../controllers/authControllers";
const router = express.Router();

router.get("/login/oauth", googleOAuthRedirect);
router.get("/google/callback",googleOAuthCallback);
router.get('/checklogin');


export default router;

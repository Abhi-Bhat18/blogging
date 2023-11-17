import express from "express";
import {
  commentOnABlog,
  editBlog,
  getABlog,
  getBlogs,
  likeABlog,
  writeBlog,
  deleteBlog,
  searchBlogs,
} from "../controllers/blogController.ts";
import jwtAuthGuard from "../middlewares/jwtAuthGuard.ts";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getABlog);

router.put("/:id/comment", jwtAuthGuard, commentOnABlog);
router.put("/:id/like", jwtAuthGuard, likeABlog);

router.post("/", upload.single("banner"), jwtAuthGuard, writeBlog);
router.put("/:id", upload.single("banner"), jwtAuthGuard, editBlog);
router.delete("/:id", jwtAuthGuard, deleteBlog);
router.get("/search", searchBlogs);
export default router;

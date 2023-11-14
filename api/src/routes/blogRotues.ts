import express from "express";
import {
  commentOnABlog,
  editBlog,
  getABlog,
  getBlogs,
  likeABlog,
  writeBlog,
  deleteBlog,
  searchBlogs
} from "../controllers/blogController";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getABlog);

router.put("/:id/comment", commentOnABlog);
router.put("/:id/like", likeABlog);

router.post("/", writeBlog);
router.put("/", editBlog);
router.delete("/:id", deleteBlog);
router.get('/search',searchBlogs);
export default router;



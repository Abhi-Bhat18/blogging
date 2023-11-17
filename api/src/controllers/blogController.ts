import { Request, Response } from "express";
import Blog from "../models/blogSchema.ts";
import User from "../models/userSchema.ts";
import {
  deleteFileFromServer,
  uploadFileToS3,
  Params,
} from "../utils/fileHandles.ts";
import fs from "fs";

export const getBlogs = async (req: Request, res: Response) => {
  const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;

  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

  try {
    const blogs = await Blog.find({}).skip(offset).limit(limit).sort({
      createdAt: -1,
    });

    if (!blogs)
      return res.status(404).json({
        success: false,
        message: "Not able to find the resource",
      });

    return res.json(blogs);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getABlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(req.user?._id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Unable to find the resource",
      });

    return res.json(blog);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const commentOnABlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          comments: {
            commentBy: req.user?._id,
            comment: req.body.comment,
            commentedOn: req.body.commentedOn,
          },
        },
      },
      { new: true }
    );

    if (!blog)
      return res.status(404).json({
        succes: false,
        message: "Not able to find the resource",
      });

    return res.json({
      success: true,
      message: "Comment added successfully",
    });
  } catch (error) {}
};

export const likeABlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $addToSet: {
          likes: req.user?._id,
        },
      },
      { new: true }
    );

    if (!blog)
      return res.status(404).json({
        succes: false,
        message: "Not able to find the resource",
      });

    return res.json({
      success: true,
      message: "Liked a blog successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const writeBlog = async (req: Request, res: Response) => {
  const file = req.file;
  try {
    const user = await User.findById(req.user?._id);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "Not able to find the resource",
      });

    if (user.role === "USER")
      return res.status(403).json({
        success: false,
        message: "Not have enough permission to perform the action",
      });

    if (!file)
      return res.status(400).json({
        success: false,
        message: "Invalid Request",
      });

    const fileContent = fs.readFileSync(file?.path);

    const params: Params = {
      Bucket: process.env.S3_BUCKET as string,
      Key: file?.originalname,
      Body: fileContent,
    };

    const bannerUrl = await uploadFileToS3(params);

    const blog = await Blog.create({
      authorId: user._id,
      bannerUrl: bannerUrl,
      title: req.body.title,
      content: req.body.content,
      metaDescription: req.body.metaDescription,
      tags: req.body.tags.split(","),
    });

    if (!blog)
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });

    user.blogs.push(blog._id);
    await user.save();

    return res.json({
      success: true,
      message: "Blog created successfullly",
      blog: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  } finally {
    if (file) deleteFileFromServer(file.path);
  }
};

export const editBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
        authorId: req.user?._id,
      },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          metaDescription: req.body.metaDescription,
        },
      }
    );

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Not found",
      });

    return res.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deleteBlog = await Blog.findOneAndUpdate(
      {
        _id: req.params.id,
        authorId: req.user?._id,
      },
      {
        $set: {
          deleted: true,
        },
      }
    );

    if (!deleteBlog)
      return res.status(404).json({
        success: true,
        message: "Not able to find the resource",
      });

    // update the user
    await User.findByIdAndUpdate(req.user?._id, {
      $pull : {
        blogs : deleteBlog._id
      }
    });

    return res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const searchBlogs = async (req: Request, res: Response) => {};

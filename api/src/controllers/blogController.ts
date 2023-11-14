import { Request, Response } from "express";
import Blog from "../models/blogSchema.ts";

export const getBlogs = async (req: Request, res: Response) => {
  const offset = req.query.offset ? req.query.offse : 0;

  const limit = req.query.limit ? req.query.limit : 10;

  try {
  } catch (error) {


  }
};

export const getABlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Unable to find the resource",
      });

    return res.json(blog);
  } catch (error) {}
};

export const commentOnABlog = async (req: Request, res: Response) => {};

export const likeABlog = async (req: Request, res: Response) => {
  try {


  } catch (error) {


  }
};


export const writeBlog = async (req: Request, res: Response) => {
  
}

export const editBlog =async (req : Request, res : Response) => {
  
}

export const deleteBlog =async (req : Request, res : Response) => {
  
}

export const searchBlogs =async (req : Request, res : Response) => {
  
}
import { Request, Response } from "express";
import User from "../models/userSchema.ts";

export const viewProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies._id).populate(
      "blogs",
      "title bannerUrl metaDescription"
    );

    return res.json(user);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const viewUserProfile = async (req: Request, res: Response) => {
  try {
    const profile = await User.findById(req.params.id).populate(
      "blogs",
      "title bannerUrl metaDescription"
    );

    if (!profile)
      return res.status(404).json({
        success: false,
        message: "Not able to find the resource",
      });

    return res.json(profile);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/**
 * Subscribes the user to the newsletter.
 *
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @return {Promise<void>} - a promise that resolves when the subscription is complete
 */
export const subscribeToNewsLetter =async (req: Request, res : Response) => {
    try {
      
      console.log('user');

      const subscribe = await User.findByIdAndUpdate(req.user?._id, {
        
      })
    } catch (error) {
      
    }
}

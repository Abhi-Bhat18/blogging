import { Request, Response } from "express";
import User from '../models/userSchema.ts';

export const viewProfile = async (req: Request, res: Response) => {
  try {

    const user = await User.findById(req.cookies._id);


  } catch (error) {

    
  }
};


export const viewUserProfile =async (req:Request, res : Response) => {
    try {
        
    } catch (error) {
        
    }
}
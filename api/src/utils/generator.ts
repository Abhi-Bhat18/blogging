import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const generateToken = (_id: mongoose.Types.ObjectId, email: string,role : string) => {
  const token = jwt.sign(
    {
      email,
      _id,
      role 
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
  return token;
};


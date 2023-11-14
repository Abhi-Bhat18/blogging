import mongoose from "mongoose";
import dotenv from "dotenv";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


export default ConnectDB;
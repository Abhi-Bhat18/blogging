import express, { Request, Response } from "express";
import dotnev from "dotenv";

import ConnectDB from "./config/db.ts";
import authRoutes from "./routes/authRoutes.ts";
import blogRoutes from "./routes/blogRotues.ts";
import jwtAuthGuard from "./middlewares/jwtAuthGuard.ts";

dotnev.config();
const port = process.env.PORT || 1337;

const Server = async () => {
  const app = express();

  await ConnectDB()

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //Routes
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/blog" ,blogRoutes);

  app.get("/check", (req: Request, res: Response) => {
    return res.json({
      success: true,
    });
  });

  return app;
};


export default Server;

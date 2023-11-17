import { Response, NextFunction, Request } from "express";

import jwt from "jsonwebtoken";
import { JwtDecoded } from "../declarations/customInterfaces";

import dotnev from "dotenv";

dotnev.config();

/**
 * Middleware function to authenticate requests using JWT token.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */

const jwtAuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.a_t;

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Invalid Request",
    });

  try {
    const decoded = jwt.verify(
      token,
      process.env.NODE_ENV as string
    ) as JwtDecoded;

    req.user = req.user || {};

    req.user.email = decoded.email;
    req.user.role = decoded.role;
    req.user._id = decoded._id;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Request",
    });
  }
};

export default jwtAuthGuard;

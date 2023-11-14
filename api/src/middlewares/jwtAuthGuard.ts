import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../interfaces/extendedInterface";

import jwt, { JwtPayload } from "jsonwebtoken";
import dotnev from "dotenv";

/**
 * Middleware function to authenticate requests using JWT token.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */
const jwtAuthGuard = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
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
    ) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Request",
    });
  }
};

export default jwtAuthGuard;

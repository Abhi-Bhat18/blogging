import { Response, Request, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";

/**
 * Validates the body of a request against a given schema.
 *
 * @param {ZodObject<any, any>} schema - The schema to validate against.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function in the middleware chain.
 * @return {void}
 */
const validateBody = (schema: ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors here
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        // Handle other errors
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};

export default validateBody;


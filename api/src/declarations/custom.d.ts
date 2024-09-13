import { Express } from "express-serve-static-core";
declare module "express-serve-static-core" {
  interface Request {
    file? : any,
    user?: {
      _id?: string;
      email?: string;
      role?: string;
    };
  }
}

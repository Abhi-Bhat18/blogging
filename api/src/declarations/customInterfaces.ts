import { JwtPayload } from "jsonwebtoken";

export interface JwtDecoded extends JwtPayload {
  role: string;
  _id: string;
  email: string;
}

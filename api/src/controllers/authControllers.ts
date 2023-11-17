import { Request, Response } from "express";
import { google } from "googleapis";
import User from "../models/userSchema.ts";
import { generateToken } from "../utils/generator.ts";
import jwt, { JwtPayload } from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

console.log("client Id", process.env.OAUTH_CLIENT_ID as string);

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID as string,
  process.env.OAUTH_CLIENT_SECRET as string,
  "http://localhost:1337/api/v1/auth/google/callback"
);

// Access scopes for profile and email.
const scopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

// Generate a url that asks permissions for the Drive activity scope
const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
});

export const googleOAuthRedirect = (req: Request, res: Response) => {
  try {
    return res.redirect(authorizationUrl);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const googleOAuthCallback = async (req: Request, res: Response) => {
  // getting the authorization code from the callback

  let { code } = req.query;
  if (!code) return res.status(401).json({ success: false });

  try {
    //getting the tokens and setting it for oauth2Client
    let { tokens } = await oauth2Client.getToken(code as string);
    oauth2Client.setCredentials(tokens);

    // getting the user details from the gmail
    const profile = await google
      .oauth2("v2")
      .userinfo.get({ auth: oauth2Client });

    // if the user exists then login the user or
    const userExist = await User.findOne({
      email: profile.data.email,
    });

    // if user already exists then generate the token and login
    if (userExist) {
      const token = generateToken(
        userExist._id,
        userExist.email,
        userExist.role
      );
      res.cookie("__$a_t", token, {
        httpOnly: true,
      });
      return res.redirect("http://localhost:3000/");
    }

    console.log(profile.data.given_name, profile.data.family_name);
    // Create the user in DB
    const user = await User.create({
      firstName: profile.data.given_name,
      lastName: profile.data.family_name,
      email: profile.data.email,
      imgUrl: profile.data.picture,
    });

    const token = generateToken(user._id, user.email, user.role);
    res.cookie("__$a_t", token, {
      httpOnly: true,
    });

    return res.redirect("http://localhost:3000/");
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const checkLogin = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.__$a_t;

    if (!token)
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });

    const decodedToken: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    console.log("decoded token", decodedToken);
    if (!decodedToken)
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });

    const populateUser = await User.findById(decodedToken.id).lean();

    return res.json({ user: populateUser });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

import { Request, Response } from "express";

export const googleOAuthRedirect = (req: Request, res: Response) => {
  try {
    return res.redirect("/googlecallbak");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const googleOAuthCallback = (req: Request, res: Response) => {
  try {
    const code = req.query;

    if (!code)
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


export const checkLogin =async (req: Request, res : Response) => {
    try {
        const {cookie} = req.cookies;

        
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
    }
}
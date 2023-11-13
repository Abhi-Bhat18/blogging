import jwt from "jsonwebtoken";

export const generateToken = (email: string, _id: string) => {
  const token = jwt.sign(
    {
      email,
      _id,
    },
    process.env.JWT_SECRETE as string,
    { expiresIn: "7d" }
  );
  return token;
};


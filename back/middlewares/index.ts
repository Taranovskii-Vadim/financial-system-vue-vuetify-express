import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const auhtMiddleware = (req: Request, r, next: NextFunction) => {
  // TODO get cookie and parse it to verify user token
  //   const token = req.headers.token as string;
  //   const decoded = jwt.verify(token, process.env.JWT_KEY);
  next();
};

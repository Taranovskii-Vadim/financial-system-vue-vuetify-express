import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";

import { Request } from "../types";

export const auhtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies as { token: string };
  const decoded = jwt.verify(token, process.env.JWT_KEY) as Request["user"];

  if (decoded) {
    req.user = decoded;
    next();
  }
};

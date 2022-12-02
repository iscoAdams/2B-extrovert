import customErr from "../error/customErr";
import { Request, Response, NextFunction } from "express";

export default (
  err: customErr,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof customErr) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
    return;
  }
  res.status(500).json({
    status: 500,
    message: "internal server error",
  });
};

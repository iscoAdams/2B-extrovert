import { handleUnauthorizedErr } from "../error/unauthorized";
import { asyncWrapper } from "./asyncWrapper";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface payload {
  id: string;
  name: string;
}
export default asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token || !token.startsWith("Bearer")) {
      throw handleUnauthorizedErr("No token, authorization denied");
    }
    const payload = verify(token, process.env.JWT_SECRET);
    // req.body.user = payload;
    req.body.user = {
      userId: (payload as payload).id,
      name: (payload as payload).name,
    };
    next();
  }
);

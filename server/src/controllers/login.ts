import express, { Request, Response } from "express";
import { User } from "../models/User";
import { asyncWrapper } from "../middleware/asyncWrapper";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { handleUnauthorizedErr, handleBadRequestErr } from "../error/errUtil";

export default asyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw handleBadRequestErr("something is missing");
  }
  const user = await User.findOne({
    where: { email },
  });
  const validPassword = await bcrypt.compare(password, user.password);
  if (!user || !validPassword) {
    throw handleUnauthorizedErr("invalid credentials");
  }
  const token = sign(
    { userId: user.id, email: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  res.status(200).json({
    message: "user logged in",
    email,
    token,
  });
});

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { asyncWrapper } from "../middlewares/asyncWrapper";
export default asyncWrapper(async (req: Request, res: Response) => {
  const { username, nickName, email, password, number } = req.body;
  const user = await User.findOne({ where: { username } });
  if (user) {
    return res.status(400).send("user found");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    username,
    nickName,
    email,
    password: hashedPassword,
    number,
  });
  res.status(201).send({
    message: "user created",
    newUser,
  });
});

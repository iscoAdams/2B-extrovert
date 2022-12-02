import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { asyncWrapper } from "../middleware/asyncWrapper";
import { sign } from "jsonwebtoken";
export default asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, nickname, email, password, number } = req.body;
    if (!username || !nickname || !email || !password || !number) {
      return res.status(400).send({
        status: "error",
        message: "all fields are required",
      });
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).send("email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      nickname,
      email,
      password: hashedPassword,
      number,
    });
    const token = sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
      //https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens
    );


      // const {password, ...userWithoutPassword} = newUser; //can't redeclare block-scoped variable 
      
      // const userWithoutPassword = newUser; //without password being optional nothing will change
      // delete userWithoutPassword.password;

    res.status(201).send({
      message: "user created",
      username,
      email,
      token,
    });
  }
);

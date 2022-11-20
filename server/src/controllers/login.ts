import express, { Request, Response } from "express";
import { User } from "../models/User";
import { asyncWrapper } from "../middlewares/asyncWrapper";
import bcrypt from "bcryptjs";

export default asyncWrapper (async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(400).send("user not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send("invalid credentials");
    }
    res.status(200).send({
        message: "user logged in",
        user,
    });
});
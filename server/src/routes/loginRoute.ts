import { Router } from "express";
import  login  from "../controllers/login";

const router = Router();
router.post("/login", login);
// router.route('/login').post(login);

export default router;
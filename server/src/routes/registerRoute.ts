import { Router } from "express";
import register from "../controllers/register";
import auth from "../middleware/auth";
const router = Router();
router.post("/register", register);
// router.route("/register").post(register);

export default router;

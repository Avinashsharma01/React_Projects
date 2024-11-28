import express from "express";
import { signup, home, login, findUser, logout } from "../controllers/userController.js";
const router = express.Router();

router.get("/home", home);
router.post("/signup", signup);
router.post("/login", login);
router.get("/findUser", findUser);
router.post("/logout", logout);

export default router;
import {
  handleLogin,
  handleResetPassword,
  handleSignup,
  handleUsers,
} from "../../../handlers/home/authHandlers.js";
import { Router } from "express";
import authInitiateObjects from "../../../middlewares/home/auth/authInitiateObjects.js";
import orgAuthInitiateObjects from "../../../middlewares/home/orgAuth/orgAuthInitiateObjects.js";

const authRouter = new Router();

authRouter.post("/org/signup", orgAuthInitiateObjects, handleSignup);
authRouter.post("/admin/");
authRouter.post("/signup", authInitiateObjects, handleSignup);
authRouter.post("/login", authInitiateObjects, handleLogin);
authRouter.put("/reset-password", authInitiateObjects, handleResetPassword);
authRouter.get("/all", authInitiateObjects, handleUsers);

export default authRouter;

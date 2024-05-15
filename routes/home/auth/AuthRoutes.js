import {
  handleLogin,
  handleResetPassword,
  handleSignup,
  handleUsers,
} from "../../../handlers/home/authHandlers.js";
import { Router } from "express";
import authInitiateObjects from "../../../middlewares/home/auth/authInitiateObjects.js";

const authRouter = new Router();

authRouter.use(authInitiateObjects);

authRouter.post("/signup", handleSignup);

authRouter.post("/login", handleLogin);

authRouter.put("/reset-password", handleResetPassword);

authRouter.get("/all", handleUsers);
export default authRouter;

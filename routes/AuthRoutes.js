import {
  getUser,
  handleLogin,
  handleResetPassword,
  handleSignup,
  handleUsers,
} from "../handlers/home/authHandlers.js";
import { Router } from "express";
import authInitiateObjects from "../middlewares/home/auth/authInitiateObjects.js";
import orgAuthInitiateObjects from "../middlewares/home/orgAuth/orgAuthInitiateObjects.js";
import adminAuthInitiateObjects from "../middlewares/admin/adminAuthInitiateObjects.js";

const authRouter = new Router();

authRouter.post("/org/signup", orgAuthInitiateObjects, handleSignup);
authRouter.post("/admin/signup", adminAuthInitiateObjects, handleSignup);
authRouter.post("/signup", authInitiateObjects, handleSignup);
authRouter.post("/login", authInitiateObjects, handleLogin);
authRouter.put("/reset-password", authInitiateObjects, handleResetPassword);
authRouter.get("/all", authInitiateObjects, handleUsers);
authRouter.get("/user", authInitiateObjects, getUser);

export default authRouter;

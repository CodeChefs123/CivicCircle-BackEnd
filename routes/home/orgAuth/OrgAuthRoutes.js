import {
  handleLogin,
  handleResetPassword,
  handleSignup,
  handleUsers,
} from "../../../handlers/home/authHandlers.js";
import { Router } from "express";
import orgAuthInitiateObjects from "../../../middlewares/home/orgAuth/orgAuthInitiateObjects.js";

const orgAuthRouter = new Router();

orgAuthRouter.use(orgAuthInitiateObjects);

orgAuthRouter.post("/signup", handleSignup);

orgAuthRouter.post("/login", handleLogin);

orgAuthRouter.put("/reset-password", handleResetPassword);

orgAuthRouter.get("/all", handleUsers);
export default orgAuthRouter;

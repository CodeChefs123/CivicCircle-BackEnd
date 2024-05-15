import { Router } from "express";
import adminOrganizationVertifyInitiateObjects from "../middlewares/admin/adminOrganizationVertifyInitiateObjects.js";
import {
  acceptOrganization,
  declineOrganization,
  getAllOrganization,
} from "../handlers/admin/adminOrganizationVertifyHandlers.js";

const adminVerificationRouter = new Router();
adminVerificationRouter.use(adminOrganizationVertifyInitiateObjects);
adminVerificationRouter.post("/accept", acceptOrganization);
adminVerificationRouter.post("/decline", declineOrganization);
adminVerificationRouter.get("/get/all", getAllOrganization);
export default adminVerificationRouter;

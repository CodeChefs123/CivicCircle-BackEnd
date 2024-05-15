import { Router } from "express";
import notificationInitiateObjects from "../../middlewares/organization/notificationInitiateObjects.js";
import {
  addNotification,
  getNotifications,
} from "../../handlers/organization/notificationHandlers.js";

const notificationRouter = Router();

notificationRouter.use(notificationInitiateObjects);
notificationRouter.route("/").get(getNotifications).put(addNotification);

export default notificationRouter;

import { Router } from "express";
import notificationInitiateObjects from "../../middlewares/organization/notificationInitiateObjects";
import {
  addNotification,
  getNotifications,
} from "../../handlers/organization/notificationHandlers";

const notificationRouter = Router();

notificationRouter.use(notificationInitiateObjects);
notificationRouter.route("/").get(getNotifications).put(addNotification);

export default notificationRouter;

import NotificationModel from "../../models/organization/NotificationModel.js";

const notificationInitiateObjects = (req, res, next) => {
  req.notificationModel = new NotificationModel(req.uid);
  next();
};

export default notificationInitiateObjects;

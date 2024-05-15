export const addNotification = async (req, res) => {
  const { notification } = req.body;
  const response = await req.notificationModel.sendNotification(notification);
  res.json({ response });
};
export const getNotifications = async (req, res) => {
  const response = await req.notificationModel.getNotifications();
  res.json({ response });
};

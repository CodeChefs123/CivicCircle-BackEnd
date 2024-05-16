import AdminAuthModel from "../../models/admin/AdminAuthModel.js";

const adminAuthInitiateObjects = (req, _, next) => {
  const { email, password, photo, phoneNumber, addedBy } = req.body;
  req.auth = new AdminAuthModel(
    email,
    password,
    photo,
    phoneNumber,
    addedBy
  );
  next();
};

export default adminAuthInitiateObjects;

import AdminAuthModel from "../../models/admin/AdminAuthModel";

const adminAuthInitiateObjects = (req, _, next) => {
  const { email, password, photoURL, phoneNumber, addedBy } = req.body;
  req.auth = new AdminAuthModel(
    email,
    password,
    photoURL,
    phoneNumber,
    addedBy
  );
  next();
};

export default adminAuthInitiateObjects;

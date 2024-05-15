import Auth from "../../../models/home/auth/AuthModel.js";

const authInitiateObjects = (req, _, next) => {
  const { email, password, photoUrl, phoneNumber } = req.body;
  req.auth = new Auth(email, password, photoUrl, phoneNumber);
  next();
};

export default authInitiateObjects;

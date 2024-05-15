import Auth from "../../../models/home/auth/AuthModel.js";

const authInitiateObjects = (req, _, next) => {
  const { email, password, photoUrl } = req.body;
  req.auth = new Auth(email, password);
  next();
};

export default authInitiateObjects;

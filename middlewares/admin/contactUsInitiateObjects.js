import ContactUsModel from "../../models/admin/ContactUsModel.js";

const contactUsInitiateObjects = (req, _, next) => {
  const { name, email, message, contactID } = req.body;
  req.contactUsInstance = new ContactUsModel(name, email, message, contactID);
  next();
};

export default contactUsInitiateObjects;

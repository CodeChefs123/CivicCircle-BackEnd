import { Router } from "express";
import contactUsInitiateObjects from "../middlewares/admin/contactUsInitiateObjects.js";
import {
  createContactUs,
  deleteContactUs,
  getAllContactUs,
  updateContactUs,
} from "../handlers/admin/contactUsHandlers.js";

const contactUsRouter = Router();
contactUsRouter.use(contactUsInitiateObjects);
contactUsRouter
  .route("/")
  .get(getAllContactUs)
  .post(createContactUs)
  .put(updateContactUs)
  .delete(deleteContactUs);
export default contactUsRouter;

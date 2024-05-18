import { Router } from "express";
import { cvUploadHandler } from "../handlers/cvHandler.js";
import { CVInitiateObjects } from "../middlewares/CVInitiateObjects.js";

const CVRouter = Router();
CVRouter.use(CVInitiateObjects);
CVRouter.route("/").post(cvUploadHandler);
export default CVRouter;

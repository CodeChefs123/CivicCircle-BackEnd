import { Router } from "express";
import trainingInitiateObjects from "../../middlewares/organization/trainingInitiateObjects.js";
import {
  createTraining,
  deleteTraining,
  getAllTrainings,
  updateTraining,
  applyTraining,
} from "../../handlers/organization/trainingHandlers.js";

const trainingRouter = Router();
trainingRouter.use(trainingInitiateObjects);
trainingRouter
  .route("/")
  .get(getAllTrainings)
  .post(createTraining)
  .put(updateTraining)
  .delete(deleteTraining);
trainingRouter.put("/apply", applyTraining);
export default trainingRouter;

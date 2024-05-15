import { Router } from "express";
import trainingInitiateObjects from "../../middlewares/organization/trainingInitiateObjects.js";
import {
  createTraining,
  deleteTraining,
  getAllTrainings,
  updateTraining,
} from "../../handlers/organization/trainingHandlers.js";

const trainingRouter = Router();
trainingRouter.use(trainingInitiateObjects);
trainingRouter
  .route("/")
  .get(getAllTrainings)
  .post(createTraining)
  .put(updateTraining)
  .delete(deleteTraining);

export default trainingRouter;

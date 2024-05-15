import { Router } from "express";
import jobInitiateObjects from "../../middlewares/organization/jobInitiateObjects.js";
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} from "../../handlers/organization/jobHandlers.js";

const jobRouters = Router();
jobRouters.use(jobInitiateObjects);
jobRouters
  .route("/")
  .get(getAllJobs)
  .post(createJob)
  .put(updateJob)
  .delete(deleteJob);

export default jobRouters;

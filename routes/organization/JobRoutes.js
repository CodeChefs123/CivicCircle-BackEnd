import { Router } from "express";
import jobInitiateObjects from "../../middlewares/organization/jobInitiateObjects";
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} from "../../handlers/organization/jobHandlers";

const jobRouters = Router();
jobRouters.use(jobInitiateObjects);
jobRouters
  .route("/")
  .get(getAllJobs)
  .post(createJob)
  .put(updateJob)
  .delete(deleteJob);

export default jobRouters;

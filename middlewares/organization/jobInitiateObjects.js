import JobModel from "../../models/organization/JobModel.js";

const jobInitiateObjects = (req, res, next) => {
  const {
    title,
    country,
    applicants,
    employees,
    skills,
    description,
    jobID,
    orgID,
  } = req.body;
  console.log(
    title,
    country,
    applicants,
    employees,
    skills,
    description,
    jobID,
    orgID
  );
  req.job = new JobModel(
    title,
    country,
    applicants,
    employees,
    skills,
    description,
    jobID,
    orgID
  );
  next();
};

export default jobInitiateObjects;

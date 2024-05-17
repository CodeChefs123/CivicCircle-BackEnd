import TrainingModel from "../../models/organization/TrainingModel.js";

const trainingInitiateObjects = (req, res, next) => {
  const { title, description, level, skillsCovered, trainingID } = req.body;
  req.trainingModel = new TrainingModel(
    title,
    description,
    level,
    skillsCovered ? JSON.parse(skillsCovered) : undefined,
    trainingID
  );
  next();
};
export default trainingInitiateObjects;

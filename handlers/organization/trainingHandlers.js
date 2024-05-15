export const getAllTrainings = async (req, res) => {
  const response = await req.trainingModel.readAll();
  res.json({ response });
};
export const createTraining = async (req, res) => {
  const response = await req.trainingModel.create();
  res.json({ response });
};
export const updateTraining = async (req, res) => {
  const response = await req.trainingModel.update();
  res.json({ response });
};
export const deleteTraining = async (req, res) => {
  const response = await req.trainingModel.delete();
  res.json({ response });
};

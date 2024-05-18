export const getAllJobs = async (req, res) => {
  const response = await req.job.readAll();
  res.json({ response });
};
export const createJob = async (req, res) => {
  const response = await req.job.create();
  res.json({ response });
};
export const updateJob = async (req, res) => {
  const response = await req.job.update();
  res.json({ response });
};
export const deleteJob = async (req, res) => {
  const response = await req.job.delete();
  res.json({ response });
};
export const applyJobs = async (req, res) => {
  const response = await req.job.apply(req.uid);
  res.json({ response });
};

export const cvUploadHandler = (req, res) => {
  const response = req.cvModel.upload(req.body.file);
  return res.json({ response });
};

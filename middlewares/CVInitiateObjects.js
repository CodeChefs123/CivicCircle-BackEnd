export const CVInitiateObjects = (req, res, next) => {
  req.cvModel = new CVModel(req.uid);
  next();
};

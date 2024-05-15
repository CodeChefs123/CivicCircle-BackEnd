import AdminOrganizationVertifyModel from "../../models/admin/AdminOrganizationVertifyModel.js";

const adminOrganizationVertifyInitiateObjects = (req, _, next) => {
  req.orgVertify = new AdminOrganizationVertifyModel(req.uid);
  next();
};

export default adminOrganizationVertifyInitiateObjects;

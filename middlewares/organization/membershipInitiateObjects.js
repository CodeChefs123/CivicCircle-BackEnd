import MembershipRequestModel from "../../models/organization/MemebershipRequestModel.js";

const membershipInitiateObjects = (req, res, next) => {
  const { orgID } = req.body;
  req.membershipInstance = new MembershipRequestModel(orgID);
  next();
};

export default membershipInitiateObjects;

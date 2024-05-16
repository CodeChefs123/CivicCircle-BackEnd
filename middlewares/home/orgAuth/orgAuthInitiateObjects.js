import OrgAuth from "../../../models/home/auth/OrgAuthModel.js";

const orgAuthInitiateObjects = (req, _, next) => {
  const {
    email,
    password,
    photo,
    phoneNumber,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array,
    name,
  } = req.body;
  req.auth = new OrgAuth(
    email,
    password,
    photo,
    phoneNumber,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array,
    name
  );
  next();
};

export default orgAuthInitiateObjects;

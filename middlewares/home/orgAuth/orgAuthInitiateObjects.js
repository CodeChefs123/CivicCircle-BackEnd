import OrgAuth from "../../../models/home/auth/OrgAuthModel.js";

const orgAuthInitiateObjects = (req, _, next) => {
  const {
    email,
    password,
    photoUrl,
    phoneNumber,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array,
  } = req.body;
  req.auth = new OrgAuth(
    email,
    password,
    photoUrl,
    phoneNumber,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array
  );
  next();
};

export default orgAuthInitiateObjects;

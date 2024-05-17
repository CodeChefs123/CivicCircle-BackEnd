import { Router } from "express";
import {
  approveMembershipRequest,
  declineMembershipRequest,
  getMembershipRequests,
} from "../handlers/organization/MembershipRequestHandlers.js";
import membershipInitiateObjects from "../middlewares/organization/membershipInitiateObjects.js";

const membershipRouter = Router();

membershipRouter.use(membershipInitiateObjects);
membershipRouter
  .route("/")
  .get(getMembershipRequests)
  .post(approveMembershipRequest)
  .put(declineMembershipRequest);
export default membershipRouter;

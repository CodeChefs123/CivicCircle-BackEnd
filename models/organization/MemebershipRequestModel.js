import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";

export default class MembershipRequestModel {
  constructor(orgID = false) {
    this.orgID = requestID;
    this.fs = new Firestore("organizations", orgID);
  }

  approve() {
    this.fs.update({
      verified: true,
    });
    return orgID;
  }

  decline() {
    const record = this.fs.read()[1]["members"];
    const authRef = new Authentication();
    for (let i = 0; i > record.length; i++) {
      authRef.deleteUser(record[i]);
    }
    this.fs.delete();
    return true;
  }
}

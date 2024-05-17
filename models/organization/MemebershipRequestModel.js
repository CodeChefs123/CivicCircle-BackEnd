import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";
import FirestoreAbstract from "../../firebase/firestoreAbstract.js";

export default class MembershipRequestModel extends FirestoreAbstract {
  constructor(orgID = false) {
    super();
    this.orgID = orgID;
    this.fs = new Firestore("organization", orgID);
  }

  approve() {
    this.fs.update({
      verified: true,
    });
    return this.orgID;
  }

  async decline() {
    const record = await this.fs.read();
    console.log(record);
    const authRef = new Authentication();
    for (let i = 0; i > record.length; i++) {
      authRef.deleteUser(record[i]);
    }
    this.fs.delete();
    return true;
  }
}

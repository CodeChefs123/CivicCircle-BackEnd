import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";
import sendEmail from "../../utils/helper/sendEmail.js";

export default class AdminOrganizationVertifyModel {
  constructor(uid) {
    this.firestoreRef = new Firestore("auth-organization", uid);
    this.authRef = new Authentication();
    this.uid = uid;
  }

  async accept() {
    this.firestoreRef.update({
      verified: true,
    });
    const userData = this.authRef.getUser(this.uid);
    await this.authRef.verificationEmail(userData.email);
    return userData;
  }

  decline(reason) {
    this.firestoreRef.delete();
    const userData = this.authRef.getUser(this.uid);
    this.authRef.deleteUser(this.uid);
    sendEmail(
      userData.email,
      "Your request has been declined",
      `
    Dear user,
      
        We regret to inform you that your request has been declined. 
        Reason: ${reason}

    Sincerely,
    CivicCircle`
    );
  }

  getAllUsers() {
    return this.firestoreRef.readAll()[1].filter((doc) => !doc.verified);
  }
}

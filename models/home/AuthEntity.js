import Firestore from "../../firebase/firestore.js";
import verifyUIDInCollection from "../../utils/firebase/firestore/verifyUIDInCollection.js";

export default class AuthEntity {
  constructor(email, password, phoneNumber, name, photo = [NaN, NaN]) {
    this.email = email;
    this.password = password;
    this.photo = photo[1];
    this.photoType = photo[0];
    this.phoneNumber = phoneNumber;
    this.name = name;
  }
  resetPassword() {
    return this.authRef.resetPassword(this.email);
  }

  getAll() {
    return this.authRef.getUsers();
  }
  getUser(uid) {
    return this.authRef.getUser(uid);
  }
  async loginUser() {
    let response = await this.authRef.loginUser(this.email, this.password);
    response = response[1];
    if (!response[0]) {
      return [false, response[1], NaN];
    }
    const volunteer = await verifyUIDInCollection(response, "auth");
    const admin = await verifyUIDInCollection(response, "auth-admin");
    const organization = await verifyUIDInCollection(
      response,
      "auth-organization"
    );
    const firestoreRef = new Firestore("auth-organization", response);
    const orgdata = await firestoreRef.read();
    const orgID = orgdata[1]["orgID"];
    const orgFsRef = new Firestore("organization", orgID);
    let verified = await orgFsRef.read();
    verified = verified[1]["verified"];
    console.log(volunteer, admin, organization, response, orgdata);
    if (volunteer) {
      const firestoreRef = new Firestore("auth", response);
      return [response[1], "volunteer", response, firestoreRef.read()];
    } else if (admin) {
      const firestoreRef = new Firestore("auth-admin", response);
      return [response[1], "admin", response, firestoreRef.read()];
    } else if (organization && verified) {
      return [response[1], "organization", response, firestoreRef.read()];
    } else {
      return [false, response[1], NaN];
    }
  }
}

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

  async loginUser() {
    const response = await this.authRef.loginUser(this.email, this.password);
    console.log(response);
    if (!response[0]) {
      return [NaN, false];
    }
    const volunteer = await verifyUIDInCollection(response.uid, "auth");
    const admin = await verifyUIDInCollection(response.uid, "auth-admin");
    const organization = await verifyUIDInCollection(
      response.uid,
      "auth-organization"
    );
    if (volunteer) {
      return [response[1], "volunteer"];
    } else if (admin) {
      return [response[1], "admin"];
    } else if (organization) {
      return [response[1], "organization"];
    } else {
      return [NaN, false];
    }
  }
}

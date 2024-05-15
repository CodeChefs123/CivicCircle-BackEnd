import randomImageGenerator from "../../../utils/helper/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";
import AuthEntity from "../AuthEntity.js";
import verifyUIDInCollection from "../../../utils/firebase/firestore/verifyUIDInCollection.js";

export default class Auth extends AuthEntity {
  constructor(email, password, photoUrl, phoneNumber) {
    super(email, password, photoUrl, phoneNumber);
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth");
  }

  async createUser() {
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    await this.authRef.updateUser(response[1], {
      photoURL: this.photoUrl || randomImageGenerator(),
      phoneNumber: this.phoneNumber || undefined,
    });
    const link = await this.authRef.verificationEmail(this.email);
    console.log(response);

    this.firestoreRef.uid = response.uid;
    this.firestoreRef.create({
      undefined,
    });
    return [response, link];
  }

  loginUser() {
    const response = this.authRef.loginUser(this.email, this.password);
    console.log(response);
    verifyUIDInCollection(response.uid, "auth/admin");
    verifyUIDInCollection(response.uid, "auth/organization");
    return response;
  }
}

import randomImageGenerator from "../../../utils/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";
import AuthEntity from "../AuthEntity.js";

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
      verified: false,
    });
    return [response, link];
  }

  loginUser() {
    const response = this.authRef.loginUser(this.email, this.password);
    console.log(response);
    this.firestoreRef.uid = response.uid;
    this.firestoreRef.update({
      verified: true,
    });
    return response;
  }
}

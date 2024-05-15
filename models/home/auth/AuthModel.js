import randomImageGenerator from "../../../utils/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";

export default class Auth {
  constructor(email, password, photoUrl, phoneNumber) {
    this.email = email;
    this.password = password;
    this.photoUrl = photoUrl;
    this.phoneNumber = phoneNumber;
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

  resetPassword() {
    return this.authRef.resetPassword(this.email);
  }

  getAll() {
    return this.authRef.getUsers();
  }
}

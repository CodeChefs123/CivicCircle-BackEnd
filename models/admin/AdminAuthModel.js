import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";

export default class AdminAuthModel {
  constructor(email, password, photoURL, phoneNumber, addedBy) {
    this.email = email;
    this.password = password;
    this.photoURL = photoURL;
    this.phoneNumber = phoneNumber;
    this.addedBy = addedBy;
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth/admin");
  }

  createNewAdmin() {
    const adminData = {
      email,
      password,
      photoURL,
      phoneNumber,
    };
    const uid = this.authRef.createUser(adminData)[1];
    this.authRef.verificationEmail(email);
    this.firestoreRef.uid = uid;
    this.firestoreRef.create({
      addedBy,
    });
    return uid;
  }
}

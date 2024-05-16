import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";
import Storage from "../../firebase/storage.js";

export default class AdminAuthModel {
  constructor(email, password, photo, phoneNumber, addedBy) {
    this.email = email;
    this.password = password;
    this.photo = photo;
    this.phoneNumber = phoneNumber;
    this.addedBy = addedBy;
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth/admin");
  }

  createNewAdmin() {
    const adminData = {
      email,
      password,
      phoneNumber,
    };
    const uid = this.authRef.createUser(adminData)[1];
    this.authRef.verificationEmail(email);
    this.firestoreRef.uid = uid;
    const storageRef = new Storage(`pfp/${uid}.png`);
    const photoURL = storageRef.uploadByte8Array(this.photo)[1];
    console.log(photoURL);
    this.authRef.updateUser({
      photoURL,
    });
    this.firestoreRef.create({
      addedBy,
    });
    return uid;
  }
}

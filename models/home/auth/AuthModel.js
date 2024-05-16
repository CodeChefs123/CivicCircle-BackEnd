import randomImageGenerator from "../../../utils/helper/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";
import AuthEntity from "../AuthEntity.js";
import Storage from "../../../firebase/storage.js";

export default class Auth extends AuthEntity {
  constructor(email, password, photo, phoneNumber, name) {
    super(email, password, phoneNumber, name, photo);
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth");
  }

  async createUser() {
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    if (!response[0]) return response;
    const uid = response[1];
    const storageRef = new Storage(`pfp`);
    const photoURL = await storageRef.uploadByte8Array(
      `/${uid}.${this.photoType}`,
      this.photo
    );
    console.log(photoURL);
    await this.authRef.updateUser(response[1], {
      photoURL: photoURL || randomImageGenerator(),
      phoneNumber: this.phoneNumber || undefined,
    });
    const link = await this.authRef.verificationEmail(this.email);
    this.firestoreRef.uid = response.uid;
    this.firestoreRef.create({
      name: this.name,
    });
    return [
      response,
      [
        this.email,
        "Welcome to the platform!",
        this.authRef.emailVerification(link),
      ],
    ];
  }
}

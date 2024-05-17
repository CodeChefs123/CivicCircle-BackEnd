import randomImageGenerator from "../../../utils/helper/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";
import Storage from "../../../firebase/storage.js";
import AuthEntity from "../AuthEntity.js";

export default class OrgAuth extends AuthEntity {
  constructor(
    email,
    password,
    photoUrl,
    phoneNumber,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array,
    name
  ) {
    super(email, password, photoUrl, phoneNumber, name);
    this.certificateRegistrationByte8Array = certificateRegistrationByte8Array;
    this.annualReportByte8Array = annualReportByte8Array;
    this.listBoardMembersByte8Array = listBoardMembersByte8Array;
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth-organization");
  }

  async storeData(
    uid,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array
  ) {
    const storageRef = new Storage(`/orgAuth/${uid}/`);
    const certificateRegistrationUrl = await storageRef.uploadByte8Array(
      `certificateRegistration.${certificateRegistrationByte8Array[0]}/`,
      certificateRegistrationByte8Array[1]
    );
    const annualReportUrl = await storageRef.uploadByte8Array(
      `annualReport.${annualReportByte8Array[0]}`,
      annualReportByte8Array[1]
    );
    const listBoardMembersUrl = await storageRef.uploadByte8Array(
      `listBoardMembers.${listBoardMembersByte8Array[0]}`,
      listBoardMembersByte8Array[1]
    );
    return [
      certificateRegistrationUrl[1][1],
      annualReportUrl[1][1],
      listBoardMembersUrl[1][1],
    ];
  }
  async createUser() {
    const user = {
      email: this.email,
      password: this.password,
    };
    const response = await this.authRef.createUser(user);
    if (!response[0]) {
      return [response, NaN];
    }
    const storageRef = new Storage(`pfp/`);
    console.log(response);
    let photoURL = await storageRef.uploadByte8Array(
      `${response[1]}.${this.photoType}`,
      this.photo
    );
    photoURL = photoURL[1];
    await this.authRef.updateUser(response[1], {
      photoURL: photoURL || randomImageGenerator(),
      phoneNumber: this.phoneNumber || undefined,
    });
    // const link = await this.authRef.verificationEmail(this.email);
    const orgFiresotreRef = new Firestore("organization");
    const docID = await orgFiresotreRef.create({
      verified: false,
      name: this.name,
    });
    const [certificateRegistrationUrl, annualReportUrl, listBoardMembersUrl] =
      await this.storeData(
        docID[1],
        this.certificateRegistrationByte8Array,
        this.annualReportByte8Array,
        this.listBoardMembersByte8Array
      );
    orgFiresotreRef.uid = docID[1];
    orgFiresotreRef.update({
      certificateRegistrationUrl,
      annualReportUrl,
      listBoardMembersUrl,
    });
    const firestoreRef = new Firestore("auth-organization", response[1]);
    firestoreRef.create({
      name: this.name,
      notifications: [],
      orgID: docID[1],
    });
    return [response, NaN];
  }
}

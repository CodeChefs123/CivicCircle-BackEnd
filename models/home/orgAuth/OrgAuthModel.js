import randomImageGenerator from "../../../utils/randomImageGenerator.js";
import { Authentication } from "../../../firebase/authentication.js";
import Firestore from "../../../firebase/firestore.js";
import Storage from "../../../firebase/storage.js";
import AuthEntity from "../AuthEntity.js";

export default class OrgAuth extends AuthEntity {
  constructor(
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array
  ) {
    super(email, password, photoUrl, phoneNumber);
    this.certificateRegistrationByte8Array = certificateRegistrationByte8Array;
    this.annualReportByte8Array = annualReportByte8Array;
    this.listBoardMembersByte8Array = listBoardMembersByte8Array;
    this.authRef = new Authentication();
    this.firestoreRef = new Firestore("auth/organization");
  }

  async storeData(
    uid,
    certificateRegistrationByte8Array,
    annualReportByte8Array,
    listBoardMembersByte8Array
  ) {
    const storageRef = new Storage(`/orgAuth/${uid}/`);
    const certificateRegistrationUrl = storageRef.uploadByte8Array(
      `certificateRegistration.pdf`,
      certificateRegistrationByte8Array
    )[1];
    const annualReportUrl = storageRef.uploadByte8Array(
      `annualReport.pdf`,
      annualReportByte8Array
    )[1];
    const listBoardMembersUrl = storageRef.uploadByte8Array(
      `listBoardMembers.pdf`,
      listBoardMembersByte8Array
    );
    return [certificateRegistrationUrl, annualReportUrl, listBoardMembersUrl];
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
    const [certificateRegistrationUrl, annualReportUrl, listBoardMembersUrl] =
      storeData(
        response.uid,
        this.certificateRegistrationByte8Array,
        this.annualReportByte8Array,
        this.listBoardMembersByte8Array
      );
    this.firestoreRef.uid = response.uid;
    this.firestoreRef.create({
      verified: false,
      certificateRegistrationUrl,
      annualReportUrl,
      listBoardMembersUrl,
    });
    return [response, link];
  }

  loginUser() {
    const response = this.authRef.loginUser(this.email, this.password);
    console.log(response);
    this.firestoreRef.uid = response.uid;
    const data = this.firestoreRef.read();
    console.log(data);
    if (data[1].verified) {
      return response;
    } else {
      return [false, "Account not verified"];
    }
    // return response;
  }
}

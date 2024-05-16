import Firestore from "../../firebase/firestore.js";
import FirestoreAbstract from "../../firebase/firestoreAbstract.js";

export default class ContactUsModel extends FirestoreAbstract {
  constructor(name, email, message, contactID) {
    super();
    this.createStructure = {
      name,
      email,
      message,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("contactUs", contactID);
    const currentRecord = this.read();
    this.updateStructure = {
      name: name || currentRecord.name,
      email: email || currentRecord.email,
      message: message || currentRecord.message,
    };
  }
}

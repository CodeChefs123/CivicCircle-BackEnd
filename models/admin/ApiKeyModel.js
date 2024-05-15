import Firestore from "../../firebaseCP/firestore.js";
import updateData from "../../utils/firebase/firestore/updateData.js";
import FirestoreAbstract from "../../utils/firestore/FirestoreAbstract.js";

export default class ApiKey extends FirestoreAbstract {
  constructor(ownerName, ownerUid, ownerEmail, apiKey) {
    super();
    this.createStructure = {
      ownerName,
      uid: ownerUid,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("keys", apiKey);
    const currentRecord = this.read();
    this.updateStructure = updateData(
      ["ownerName", "uid", "email", "creationDate", "updateDate"],
      [ownerName, ownerUid, ownerEmail, undefined, Date.now()],
      currentRecord
    );
  }
}

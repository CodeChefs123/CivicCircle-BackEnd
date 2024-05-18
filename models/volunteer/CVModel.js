import Storage from "../../firebase/storage";

export default class CVModel {
  constructor(uid) {
    this.uid = uid;
  }

  upload(CVbyteArray) {
    const [type, byte8Array] = CVbyteArray;
    const storageRef = new Storage(`/CV/`);
    const response = storageRef.uploadByte8Array(
      byte8Array,
      `${this.uid}.${type}`
    );
    return { response };
  }
}

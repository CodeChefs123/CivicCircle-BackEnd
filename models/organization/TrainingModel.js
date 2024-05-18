import Firestore from "../../firebase/firestore.js";
import FirestoreAbstract from "../../firebase/firestoreAbstract.js";

export default class TrainingModel extends FirestoreAbstract {
  constructor(
    title,
    description,
    level,
    skillsCovered,
    trainingID,
    applicants = []
  ) {
    super();
    this.createStructure = {
      title,
      description,
      level,
      skillsCovered,
      applicants,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("training", trainingID);
    const currentRecord = this.read();
    this.updateStructure = {
      title: title || currentRecord.title,
      description: description || currentRecord.description,
      level: level || currentRecord.level,
      skillsCovered: skillsCovered || currentRecord.skillsCovered,
      applicants: applicants || currentRecord.applicants,
      updateDate: Date.now(),
    };
  }

  apply(applicant) {
    const currentRecord = this.fs.read();
    currentRecord.applicants.push(applicant);
    this.fs.update(currentRecord);
    return true;
  }
}

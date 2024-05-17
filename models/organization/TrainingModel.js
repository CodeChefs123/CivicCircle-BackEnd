import Firestore from "../../firebase/firestore.js";
import FirestoreAbstract from "../../firebase/firestoreAbstract.js";

export default class TrainingModel extends FirestoreAbstract {
  constructor(title, description, level, skillsCovered, trainingID) {
    super();
    this.createStructure = {
      title,
      description,
      level,
      skillsCovered,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("training", trainingID);
    const currentRecord = this.read();
    this.updateStructure = {
      title: title || currentRecord.title,
      description: description || currentRecord.description,
      level: level || currentRecord.level,
      skillsCovered: skillsCovered || currentRecord.skillsCovered,
    };
  }
}

import Firestore from "../../firebase/firestore.js";
import FirestoreAbstract from "../../firebase/firestoreAbstract.js";

export default class JobModel extends FirestoreAbstract {
  constructor(
    title,
    country,
    applicants,
    employees,
    skills,
    description,
    jobID,
    orgID
  ) {
    super();
    this.createStructure = {
      title,
      country,
      applicants,
      employees,
      skills,
      description,
      creationDate: Date.now(),
      orgID,
    };
    this.fs = new Firestore("jobs", jobID);
    const currentRecord = this.read();
    this.updateStructure = {
      title: title || currentRecord.title,
      country: country || currentRecord.country,
      applicants: applicants || currentRecord.applicants,
      employees: employees || currentRecord.employees,
      skills: skills || currentRecord.skills,
      description: description || currentRecord.description,
      orgID: orgID || currentRecord.orgID,
    };
  }
  apply(applicant) {
    const currentRecord = this.fs.read();
    currentRecord.applicants.push(applicant);
    this.fs.update(currentRecord);
    return true;
  }
}

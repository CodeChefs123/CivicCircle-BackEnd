import { firestore } from "../../../config/firebase.js";

export default async function getAllDocuments(collectionName) {
  const snapshot = await firestore.collection(collectionName).get();
  const documents = [];
  snapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  return documents;
}

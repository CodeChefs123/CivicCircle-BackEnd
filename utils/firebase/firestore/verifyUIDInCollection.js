import getAllDocuments from "./getAllDocuments.js";

export default async function verifyUIDInCollection(uid, collectionName) {
  const documents = await getAllDocuments(collectionName);
  return documents.some((doc) => doc.uid === uid);
}

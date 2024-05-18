import { Authentication } from "../../firebase/authentication.js";
import Firestore from "../../firebase/firestore.js";

export const getApplicants = async (req, res) => {
  const trainingsFsRef = new Firestore("trainings", req.uid);
  const trainingsSnapshot = await trainingsFsRef.read();
  const opportunitiesFsRef = new Firestore("organization", req.uid);
  const opportunitiesSnapshot = await trainingsFsRef.read();
  // Filter trainings and opportunities
  const trainings = filterByUid(trainingsSnapshot);
  const opportunities = filterByUid(opportunitiesSnapshot);
};

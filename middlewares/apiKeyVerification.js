import Firestore from "../firebaseCP/firestore.js";

const apiKeyVerification = async (req, res, next) => {
  req.apiKey = req.headers.apiKey;
  const fs = new Firestore("keys", req.apiKey);
  const [success, response] = await fs.read();
  if (!success) {
    res.status(401).json({ response, message: "Unauthorized" });
  }
  next();
};
export default apiKeyVerification;

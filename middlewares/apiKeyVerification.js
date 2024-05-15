import Firestore from "../firebaseCP/firestore.js";

const apiKeyVerification = async (req, res, next) => {
  req.apiKey = req.headers.apiKey;
  console.log(req.apiKey);
  const fs = new Firestore("keys", req.apiKey);
  const [success, response] = await fs.read();
  console.log(req.uid, response.uid, success);
  if (!success) {
    res.status(401).json({ response, message: "Unauthorized" });
  }
  next();
};
export default apiKeyVerification;

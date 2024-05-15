/**
 * Middleware function to extract UID from request parameters and perform verification.
 * If the UID is not present, it sends an error response.
 * If the UID is present, it attaches the UID to the request object and calls the next middleware function.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
const extractUidAndVerification = (req, res, next) => {
  // Destructure uid from request parameters
  const { uid } = req.headers;

  // If uid is not present, send an error response
  if (!uid) {
    return res.status(400).json({ error: "No UID in Headers" });
  }

  // Attach uid to the request object
  req.uid = uid;

  // Call the next middleware function
  next();
};

export default extractUidAndVerification;

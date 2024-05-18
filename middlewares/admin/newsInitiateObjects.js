import News from "../../models/admin/NewsModel.js";

/**
 * Middleware to initialize news objects.
 *
 * @param {Object} req - The request object.
 * @param {Object} _ - The response object (not used).
 * @param {Function} next - The next middleware function.
 *
 * @returns {void}
 */
const newsInitiateObjects = (req, res, next) => {
  // Check if the user is authorized
  // const allowedResponse = isAuthorized(req.uid, ['Admin'], [1, 0], req)

  // // If the response is an array, return the first element
  // if (Array.isArray(allowedResponse)) {
  //   return allowedResponse[0]
  // }

  // Destructure the request body
  const { newsID, title, description, tags, senderUID, communityID } = req.body;
  // Check if all required fields are present
  if (
    (!title && !description && !tags && !communityID && !senderUID) ||
    !newsID
  ) {
    res.status(400);
  }
  // Initialize the news object
  req.newsInitialization = new News(
    newsID,
    title,
    description,
    tags,
    senderUID,
    communityID
  );
  // Proceed to the next middleware
  next();
};

export default newsInitiateObjects;

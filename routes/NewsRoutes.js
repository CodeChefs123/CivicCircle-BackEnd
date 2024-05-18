// Importing necessary modules
import { Router } from "express";
// import newsInitiateObjects from "../../middlewares/admin/newsInitiateObjects.js";

import {
  getNews,
  createNews,
  updateNews,
  deleteNews,
} from "../handlers/admin/NewsHandlers.js";
import newsInitiateObjects from "../middlewares/admin/newsInitiateObjects.js";

/**
 * NewsRouter class extends BaseRouter.
 * It initializes routes for news related operations.
 */

const NewsRouter = Router();
// NewsRouter.use(extractUidAndVerification);

// Use middleware to initiate news objects
NewsRouter.use(newsInitiateObjects);

// Define route for getting news
NewsRouter.get("/", getNews);

// Define route for creating news
NewsRouter.post("/", createNews);

// Define route for updating news
NewsRouter.put("/", updateNews);

// Define route for deleting news
NewsRouter.delete("/", deleteNews);

// Export NewsRouter class
export default NewsRouter;

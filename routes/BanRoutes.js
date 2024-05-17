// Importing necessary modules
import { Router } from "express";
import {
  banUser,
  unBanUser,
  getTheUsers,
} from "../handlers/admin/BanHandlers.js";
import banInitiateObjects from "../middlewares/admin/banInitiateObjects.js";
/**
 * banRouter class extends BaseRouter to manage ban related routes.
 * It initializes the routes for getting ban status, banning a user, and unbanning a user.
 */
const banRouter = Router();
banRouter.use(banInitiateObjects);

// Define GET route for getting ban status
banRouter.get("/", getTheUsers);

// Define POST route for banning a user
banRouter.post("/", banUser);

// Define PUT route for unbanning a user
banRouter.put("/", unBanUser);

// Export banRouter class
export default banRouter;

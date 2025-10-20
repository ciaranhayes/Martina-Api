import { Router } from "express";
import {
  getBioById,
  getAllBios,
  editWholeBio,
  addNewBio
} from "../controllers/bioController.js";

const bioRouter = Router();
// Search by ID 
bioRouter.get("/:ID", getBioById);

// Get all bios
bioRouter.get("/", getAllBios);

// editWholeBio
bioRouter.put("/:ID", editWholeBio);

// add bio
bioRouter.post("/", addNewBio);

export default bioRouter;
import { Router } from "express";
import { getEventByTitlePartial,
    getEventById,
    getAllEvents,
    addNewEvent,
    editWholeEvent,
    editEventPartial,
    deleteEventByID } from "../controllers/eventController.js";

const eventRouter = Router();

// Search events by partial title
eventRouter.get("search", getEventByTitlePartial);

// Get all events
eventRouter.get("/", getAllEvents);

// Get a single event by ID
eventRouter.get("/:ID", getEventById);

// Add a new event
eventRouter.post("/", addNewEvent);

// Replace a whole event (PUT)
eventRouter.put("/:ID", editWholeEvent);

// Edit event partially (PATCH)
eventRouter.patch("/:ID", editEventPartial);

// Delete an event
eventRouter.delete("/:ID", deleteEventByID);

export default eventRouter;
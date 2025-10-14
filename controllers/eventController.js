import Event from "../models/eventModel.js";

// Get events by partial title search
async function getEventByTitlePartial(req, res) {
    try {
        const title = req.body.title;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const events = await Event.find({ title: { $regex: title, $options: "i" } })
            .select("title description link date")
            .limit(5);

        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get an event by ID
async function getEventById(req, res) {
    try {
        const event = await Event.findById(req.params.ID)
            .select("title description link date");

        if (!event) {
            return res.status(404).json({ message: "Event Not Found" });
        }

        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get all events
async function getAllEvents(req, res) {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add a new event
async function addNewEvent(req, res) {
    try {
        const { title, description, link, date } = req.body;

        if (!title || !description || !link || !date) {
            return res.status(400).json({ message: "Title, description, link, and date are required" });
        }

        const newEvent = new Event({ title, description, link, date });
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit a whole event (PUT)
async function editWholeEvent(req, res) {
    try {
        const { title, description, link, date } = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.ID,
            { $set: { title, description, link, date } },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event Not Found To Edit" });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit event partially (PATCH)
async function editEventPartial(req, res) {
    try {
        const update = {};
        const { title, description, link, date } = req.body;

        if (title) update.title = title;
        if (description) update.description = description;
        if (link) update.link = link;
        if (date) update.date = date;

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.ID,
            { $set: update },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event Not Found To Edit" });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete event by ID
async function deleteEventByID(req, res) {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.ID);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event Not Found To Delete" });
        }

        res.send("Event Deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getEventByTitlePartial,
    getEventById,
    getAllEvents,
    addNewEvent,
    editWholeEvent,
    editEventPartial,
    deleteEventByID
};

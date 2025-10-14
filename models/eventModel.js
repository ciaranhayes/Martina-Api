import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true},
    date: { type: String, required: true}
}, { collection: 'events'});

const Event = mongoose.model("Events", eventSchema);

export default Event;


import mongoose from "mongoose";

const addableSectionsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: false },
    imageSrc: { type: [String], required: true},
    type: { type: String, required: true}
}, { collection: 'sections'});

const Sections = mongoose.model("Sections", addableSectionsSchema);

export default Sections;


import mongoose from "mongoose";

const bioSchema = new mongoose.Schema({
    title: { type: String, required: true},
    text: { type: String, required: true },
    category: { type: String, required: true},
}, { collection: 'bio'});

const Bio = mongoose.model("Bio", bioSchema);

export default Bio;


import mongoose from "mongoose";

const youtubeLinkSchema = new mongoose.Schema({
    category: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true},
}, { collection: 'youtube'});

const Youtube = mongoose.model("Youtube", youtubeLinkSchema);

export default Youtube;



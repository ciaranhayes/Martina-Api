import mongoose from "mongoose";

const freeResourcesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    imageSrc: { type: String, required: true},
    description: { type: String, required: true}
}, { collection: 'freeResources'});

const Resources = mongoose.model("Resources",freeResourcesSchema);

export default Resources;



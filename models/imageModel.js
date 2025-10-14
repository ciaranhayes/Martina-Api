import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  fileName: { type: String },
  uploadedAt: { type: Date, default: Date.now }
}, { collection: 'images'});

const Upload = mongoose.model("Upload", uploadSchema);

export default Upload;

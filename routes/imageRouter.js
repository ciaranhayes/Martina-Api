import express from "express";
import Upload from "../models/imageModel.js";

const imageRouter = express.Router();

// POST /api/uploads
imageRouter.post("/", async (req, res) => {
  try {
    const { fileUrl, fileName } = req.body;

    if (!fileUrl) {
      return res.status(400).json({ message: "fileUrl is required" });
    }

    const newUpload = new Upload({ fileUrl, fileName });
    await newUpload.save();

    res.status(201).json(newUpload);
    console.log("It WORKED !!!!!")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save upload" });
  }
});

// Optional: GET all uploads
imageRouter.get("/", async (req, res) => {
  try {
    const uploads = await Upload.find().sort({ uploadedAt: -1 });
    res.json(uploads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch uploads" });
  }
});

export default imageRouter;

import express from "express";
import Youtube from "../models/youtubeLinks.js";

const youtubeRouter = express.Router();

// ✅ GET all links (optionally filtered by category)
youtubeRouter.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const links = await Youtube.find(filter).sort({ createdAt: -1 });
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET a single link by ID
youtubeRouter.get("/:id", async (req, res) => {
  try {
    const link = await Youtube.findById(req.params.id);
    if (!link) return res.status(404).json({ error: "Link not found" });
    res.json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST a new link
youtubeRouter.post("/", async (req, res) => {
  try {
    const { category, url, description } = req.body;
    const newLink = new Youtube({ category, url, description });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT (update) a link
youtubeRouter.put("/:id", async (req, res) => {
  try {
    const { category, url, description } = req.body;
    const updatedLink = await Youtube.findByIdAndUpdate(
      req.params.id,
      { category, url, description },
      { new: true }
    );
    if (!updatedLink) return res.status(404).json({ error: "Link not found" });
    res.json(updatedLink);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE a link
youtubeRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await Youtube.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Link not found" });
    res.json({ message: "Link deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default youtubeRouter;

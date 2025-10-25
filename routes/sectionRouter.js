import express from "express";
import Sections from "../models/addableSections.js";

const sectionRouter = express.Router();

// GET ALL SECTIONS
sectionRouter.get("/", async (req, res) => {
  try {
    const sections = await Sections.find();
    res.status(200).json(sections);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sections" });
  }
});

// GET SECTION BY ID
sectionRouter.get("/:id", async (req, res) => {
  try {
    const section = await Sections.findById(req.params.id);
    if (!section) return res.status(404).json({ error: "Section not found" });
    res.status(200).json(section);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch section" });
  }
});

// CREATE NEW SECTION
sectionRouter.post("/", async (req, res) => {
  try {
    const { title, text, imageSrc, type } = req.body;
    const newSection = new Sections({ title, text, imageSrc, type });
    const saved = await newSection.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create section" });
  }
});

// UPDATE SECTION BY ID
sectionRouter.put("/:id", async (req, res) => {
  try {
    const { title, text, imageSrc, type } = req.body;
    const updated = await Sections.findByIdAndUpdate(
      req.params.id,
      { title, text, imageSrc, type },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Section not found" });
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update section" });
  }
});

// DELETE SECTION BY ID
sectionRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await Sections.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Section not found" });
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete section" });
  }
});

export default sectionRouter;

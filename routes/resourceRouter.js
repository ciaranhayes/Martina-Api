import express from "express";
import Resources from "../models/freeResources.js";

const resrouceRouter = express.Router();

// 🟢 GET all resources
resrouceRouter.get("/", async (req, res) => {
  try {
    const resources = await Resources.find();
    res.status(200).json(resources);
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ message: "Failed to fetch resources" });
  }
});

// 🟢 GET single resource by ID
resrouceRouter.get("/:id", async (req, res) => {
  try {
    const resource = await Resources.findById(req.params.id);
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });
    res.status(200).json(resource);
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ message: "Failed to fetch resource" });
  }
});

// 🟡 POST add new resource
resrouceRouter.post("/", async (req, res) => {
  try {
    const { name, url, imageSrc, description } = req.body;

    if (!name || !url || !imageSrc || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newResource = new Resources({ name, url, imageSrc, description });
    await newResource.save();

    res.status(201).json(newResource);
  } catch (error) {
    console.error("Error creating resource:", error);
    res.status(500).json({ message: "Failed to create resource" });
  }
});

// 🟠 PUT update resource by ID
resrouceRouter.put("/:id", async (req, res) => {
  try {
    const updated = await Resources.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated)
      return res.status(404).json({ message: "Resource not found" });

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating resource:", error);
    res.status(500).json({ message: "Failed to update resource" });
  }
});

// 🔴 DELETE resource by ID
resrouceRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await Resources.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Resource not found" });

    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    console.error("Error deleting resource:", error);
    res.status(500).json({ message: "Failed to delete resource" });
  }
});

export default resrouceRouter;

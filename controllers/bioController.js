import Bio from "../models/bioModel.js";

// Get a bio by ID
async function getBioById(req, res) {
    try {
        const bio = await Bio.findById(req.params.ID)
            .select("title text category");

        if (!bio) {
            return res.status(404).json({ message: "Bio not found" });
        }

        res.json(bio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get all bios
async function getAllBios(req, res) {
    try {
        const bios = await Bio.find();
        res.json(bios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add a new bio
async function addNewBio(req, res) {
    try {
        const { title, text, category } = req.body;

        if (!title || !text) {
            return res.status(400).json({ message: "Title, text and category are required" });
        }

        const newBio = new Bio({ title, text, category });
        await newBio.save();

        res.status(201).json(newBio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit a whole bio (PUT)
async function editWholeBio(req, res) {
    try {
        const { title, text, category } = req.body;

        const updatedBio = await Bio.findByIdAndUpdate(
            req.params.ID,
            { $set: { title, text, category } },
            { new: true }
        );

        if (!updatedBio) {
            return res.status(404).json({ message: "Bio not found to edit" });
        }

        res.json(updatedBio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getBioById,
    getAllBios,
    addNewBio,
    editWholeBio
};

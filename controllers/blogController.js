import Blog from "../models/blogModel.js"; // ✅ correct model import

// Get a blog by partial title search
async function getBlogByTitlePartial(req, res) {
    try {
        const title = req.body.title;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const blogs = await Blog.find({ title: { $regex: title, $options: "i" } })
            .select("title author text date")
            .limit(5);

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a blog by ID
async function getBlogById(req, res) {
    try {
        const blog = await Blog.findById(req.params.ID)
            .select("title author text date");

        if (!blog) {
            return res.status(404).json({ message: "Blog Not Found" });
        }

        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get all blogs
async function getAllBlogs(req, res) {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add a new blog
async function addNewBlog(req, res) {
    try {
        const { title, author, text, category } = req.body;

        if (!title || !author || !text) {
            return res.status(400).json({ message: "Title, author, and text are required" });
        }

        const newBlog = new Blog({ title, author, text });
        await newBlog.save();

        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit a whole blog (PUT)
async function editWholeBlog(req, res) {
    try {
        const { title, author, text, category } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.ID,
            { $set: { title, author, text } },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog Not Found To Edit" });
        }

        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Edit blog partially (PATCH)
async function editBlogPartial(req, res) {
    try {
        const update = {};
        const { title, author, text, category } = req.body;

        if (title) update.title = title;
        if (author) update.author = author;
        if (text) update.text = text;

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.ID,
            { $set: update },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog Not Found To Edit" });
        }

        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete blog by ID
async function deleteBlogByID(req, res) {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.ID);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog Not Found To Delete" });
        }

        res.send("Blog Deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getBlogByTitlePartial,
    getBlogById,
    getAllBlogs,
    addNewBlog,
    editWholeBlog,
    editBlogPartial,
    deleteBlogByID
};

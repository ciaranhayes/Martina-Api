import { Router } from "express";
import {
    getBlogByTitlePartial,
    getBlogById,
    addNewBlog, 
    getAllBlogs,
    editWholeBlog,
    editBlogPartial,
    deleteBlogByID
} from "../controllers/blogController.js";


const blogRouter = Router();
// Search blogs by partial title
blogRouter.get("/search", getBlogByTitlePartial);

// Get all blogs
blogRouter.get("/", getAllBlogs);

// Get a single blog by ID
blogRouter.get("/:ID", getBlogById);

// Add a new blog
blogRouter.post("/", addNewBlog);

// Replace a whole blog (PUT)
blogRouter.put("/:ID", editWholeBlog);

// Edit blog partially (PATCH)
blogRouter.patch("/:ID", editBlogPartial);

// Delete a blog
blogRouter.delete("/:ID", deleteBlogByID);

export default blogRouter;

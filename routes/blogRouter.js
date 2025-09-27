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
blogRouter.get("/blogs/search", getBlogByTitlePartial);

// Get all blogs
blogRouter.get("/blogs", getAllBlogs);

// Get a single blog by ID
blogRouter.get("/blogs/:ID", getBlogById);

// Add a new blog
blogRouter.post("/blogs", addNewBlog);

// Replace a whole blog (PUT)
blogRouter.put("/blogs/:ID", editWholeBlog);

// Edit blog partially (PATCH)
blogRouter.patch("/blogs/:ID", editBlogPartial);

// Delete a blog
blogRouter.delete("/blogs/:ID", deleteBlogByID);

export default blogRouter;

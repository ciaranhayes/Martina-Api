import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    author: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { collection: 'blog'});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;


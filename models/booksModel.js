import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    author: { type: String, required: true },
    genre: { type: String, required: true },
    short_description: { type: String, required: true },
    page_length: { type: Number, required: true },
}, { collection: 'books'});

const Book = mongoose.model("Book", bookSchema);

export default Book;


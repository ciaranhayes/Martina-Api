import { error } from "console";
import Book from "../models/booksModel.js";


// Get Functions
async function getRandomBook(req, res) {
    try {
        const books = await Book.aggregate([{ $sample: {size: 1}}, 
            { $project: { 
                title: 1, 
                author: 1, 
                genre: 1, 
                short_description: 1, 
                page_length: 1 
            }}]);

        res.json(books);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

async function getBookTitlePartial(req, res) {
    try {
        const title = req.body.title;
        if (!title) {
            return res.status(400).json({ message: "Title is required"});
        }

        const books = await Book.find({ title: { $regex: title, $options: "i"} })
            .select("title author genre short_description page_length")
            .limit(5);

        res.json(books);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.ID) 
            .select("title author genre short_description page_length");
        
        if (!book) {
            return res.status(404).json({ message: "Movie Not Found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

// Post Controllers

async function addNewBook(req, res) {

}

export {getRandomBook, getBookTitlePartial, getBookById, addNewBook};
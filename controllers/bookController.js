import { error } from "console";
import Book from "../models/booksModel.js";


// Get Functions
async function getRandomBook(req, res) {
    try {
        const books = await Book.aggregate([{ $sample: {size: 1}}, 
            { $project: { 
                title: 1, 
                author: 1, 
                genres: 1, 
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
            .select("title author genres short_description page_length")
            .limit(5);

        res.json(books);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.ID) 
            .select("title author genres short_description page_length");
        
        if (!book) {
            return res.status(404).json({ message: "Book Not Found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

async function getAllBooks(req, res) {
    try {
        const book = await Book.find();

        res.json(book);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

async function getBookByGenre(req,res) {
    try {
        const genre = req.params.genre;
        const books = await Book.find( { genres: genre} );

        if (books.length === 0) {
            return res.status(404).json({ message: "This genre doesn't exist"});
        }

        res.json(books);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

// Post Controllers

async function addNewBook(req, res) {
    try {
            const title = req.body.title;
            const author = req.body.author;
            const genres = req.body.genres;
            const description = req.body.description;
            const page = req.body.page;

            const newBook = new Book({
                title: title, 
                author: author,
                genres: genres,
                short_description: description,
                page_length: page
            })

            await newBook.save();

            res.json(newBook);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

// Put Controllers 

async function editWholeBook(req, res) {
    try {
        const book = await Book.findById(req.params.ID) 

        if (!book) {
            return res.status(404).json({ message: "Book Not Found To Edit" });
        }

        const title = req.body.title;
        const author = req.body.author;
        const genre = req.body.genre;
        const description = req.body.description;
        const page = req.body.page;

        const changedBook = await Book.findByIdAndUpdate( 
            req.params.ID,
            {
                $set: {
                    title: title,
                    author: author,
                    genre: genre,
                    short_description: description,
                    page_length: page
                }
            },
            { new: true }
        );
    
        res.json(changedBook);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

// Patch controller 

async function editBookPartial(req, res) {
    try {
        const { title, author, genre, description, page} = req.body;

        const book = await Book.findById(req.params.ID) 

        if (!book) {
            return res.status(404).json({ message: "Book Not Found To Edit" });
        }

        const update = {};

        if (title) update.title = title;
        if (author) update.author = author;
        if (genre) update.genre = genre;
        if (description) update.description = short_description;
        if (page) update.page = page_length;

        const changedBook = await Book.findByIdAndUpdate( 
            req.params.ID,
            { $set: update },
            { new: true }
        );
    
        res.json(changedBook);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

// Delete controller 


async function deleteBookByID(req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.ID); 

        if (!book) {
            return res.status(404).json({ message: "Book Not Found To Delete" });
        }

        res.send("Book Deleted");
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

export {getRandomBook, getBookTitlePartial, getBookById, addNewBook, getAllBooks, editWholeBook, editBookPartial, deleteBookByID, getBookByGenre};
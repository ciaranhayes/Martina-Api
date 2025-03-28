import Book from "../models/booksModel.js";

async function getRandomBook(req, res) {
    try {
        const books = await Book.find({}).limit(1)
            .select("title author genre short_description page_length");

        res.json(books);
    } catch (error) {
        res.status(500).json( {message: error.message})
    }
}

async function getBookTitlePartial(req, res) {}

async function getBookSimilarTitle(req, res) {}

async function getBookById(req, res) {}

export {getRandomBook, getBookTitlePartial, getBookSimilarTitle, getBookById};
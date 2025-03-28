import { Router } from "express";
import {
    getRandomBook, 
    getBookTitlePartial,  
    getBookById,
    addNewBook, 
    getAllBooks,
    editWholeBook,
    editBookPartial,
    deleteBookByID,
    getBookByGenre
} from "../controllers/bookController.js"

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books/search", getBookTitlePartial);

booksRouter.get("/books", getAllBooks);

booksRouter.get("/books/:ID", getBookById);

booksRouter.get("/books/genre/:genre", getBookByGenre);

booksRouter.post("/books/new", addNewBook);

booksRouter.put("/books/edit/:ID", editWholeBook);

booksRouter.patch("/book/patch/:ID", editBookPartial);

booksRouter.delete("/books/remove/:ID", deleteBookByID);



export default booksRouter;
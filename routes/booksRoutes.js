import { Router } from "express";
import {
    getRandomBook, 
    getBookTitlePartial,  
    getBookById,
    addNewBook, 
    getAllBooks,
    editWholeBook
} from "../controllers/bookController.js"

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books/search", getBookTitlePartial);

booksRouter.get("/books", getAllBooks);

booksRouter.get("/books/:ID", getBookById);

booksRouter.post("/books/new", addNewBook);

booksRouter.put("/books/edit/:ID", editWholeBook);


export default booksRouter;
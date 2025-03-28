import { Router } from "express";
import {
    getRandomBook, 
    getBookTitlePartial,  
    getBookById,
    addNewBook
} from "../controllers/bookController.js"

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books/search", getBookTitlePartial);

booksRouter.get("/books/:ID", getBookById);

booksRouter.post("/books/new", addNewBook);


export default booksRouter;
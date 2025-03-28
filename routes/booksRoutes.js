import { Router } from "express";
import {
    getRandomBook, 
    getBookTitlePartial,  
    getBookById
} from "../controllers/bookController.js"

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books/search", getBookTitlePartial);

booksRouter.get("/books/:ID", getBookById);


export default booksRouter;
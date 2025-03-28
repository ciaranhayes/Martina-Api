import { Router } from "express";
import {
    getRandomBook, 
    getBookTitlePartial, 
    getBookSimilarTitle, 
    getBookById
} from "../controllers/bookController.js"

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books", getBookTitlePartial);

booksRouter.get("/books", getBookSimilarTitle);

booksRouter.get("/books/:ID", getBookById);


export default booksRouter;
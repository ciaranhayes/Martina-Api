import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/recommendation", getRandomBook);

booksRouter.get("/books", getBookTitle);

booksRouter.get("/books", getBookSimilarTitle);

booksRouter.get("/books/:ID", getBookById);


export default booksRouter;
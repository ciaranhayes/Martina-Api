import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bookRouter from "./routes/booksRoutes.js"

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Welcome to the Queer Book Repository");
});

app.use("/api", bookRouter);

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});
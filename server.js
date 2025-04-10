import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bookRouter from "./routes/booksRoutes.js"
import cors from "cors";

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;
app.use(cors());

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Welcome to the Queer Book Repository");
});

app.use("/", bookRouter);

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});
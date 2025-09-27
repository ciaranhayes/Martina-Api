import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import blogRouter from "./routes/blogRouter.js"
import cors from "cors";

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to the blog");
});

app.use("/", blogRouter);

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});
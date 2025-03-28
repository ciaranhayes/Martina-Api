import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Queer Book Repository");
});

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
})

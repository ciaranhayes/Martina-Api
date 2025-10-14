import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import blogRouter from "./routes/blogRouter.js";
import eventRouter from "./routes/eventRoutes.js";
import cors from "cors";
import imageRouter from "./routes/imageRouter.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the blog");
});

const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASSWORD = process.env.USER_PASSWORD;

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER_EMAIL && password === USER_PASSWORD) {
    return res.json({ success: true, message: "Login successful!" });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.use("/blogs", blogRouter);
app.use("/events", eventRouter);
app.use("/uploads", imageRouter);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

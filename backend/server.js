import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./database/db.js";

dotenv.config();

connectToDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

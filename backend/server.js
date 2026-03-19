import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./database/db.js";
import shoeRoutes from "./routes/shoeRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
console.log(process.env.PORT);

connectToDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/shoes", shoeRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

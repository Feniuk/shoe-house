import express from "express";
import {
  getAllShoes,
  createShoe,
  getShoeById,
} from "../controllers/shoeController.js";

const router = express.Router();

router.get("/", getAllShoes);
router.post("/", createShoe);
router.get("/:id", getShoeById);

export default router;

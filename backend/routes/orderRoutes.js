import express from "express";
import {
  getOrders,
  creatOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", creatOrder);
router.delete("/:id", deleteOrder);

export default router;

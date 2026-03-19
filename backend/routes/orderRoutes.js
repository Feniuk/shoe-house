import express from "express";
import {
  getOrders,
  creatOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { deleteALLOrders } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", creatOrder);
router.delete("/:id", deleteOrder);
router.delete("/", deleteALLOrders);

export default router;

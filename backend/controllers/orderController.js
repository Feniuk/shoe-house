import shoeOrder from "../models/order.js";

export const getOrders = async (req, res) => {
  const orders = await shoeOrder.find();

  res.json(orders);
};

export const creatOrder = async (req, res) => {
  const order = new shoeOrder(req.body);

  const savedOrder = await order.save();

  res.status(201).json(savedOrder);
};

export const deleteOrder = async (req, res) => {
  await shoeOrder.findByIdAndDelete(req.params.id);

  res.json({ message: "Order deleted" });
};

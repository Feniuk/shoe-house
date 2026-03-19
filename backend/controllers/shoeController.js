import Shoe from "../models/shoe.js";

export const getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createShoe = async (req, res) => {
  try {
    const { title, price, description, image } = req.body;
    const shoe = new Shoe({
      title,
      price,
      description,
      image,
    });
    const createdProduct = await shoe.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getShoeById = async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) {
      return res.status(404).json({ message: "Shoe ID missing!" });
    }
    res.json(shoe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

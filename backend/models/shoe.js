import mongoose from "mongoose";

const shoeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      equired: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Shoe = mongoose.model("Shoe Schema", shoeSchema);

export default Shoe;

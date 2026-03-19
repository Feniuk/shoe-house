import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productTitle: String,
    productPrice: Number,
    productImage: String,
  },
  {
    timestamps: true,
  },
);

const shoeOrder = mongoose.model("Order", orderSchema);

export default shoeOrder;

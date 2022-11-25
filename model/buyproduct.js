import { Schema, models, model } from "mongoose";

const buyproductsSchema = new Schema(
  {
    name: String,
    image: String,
    des: String,
    size: String,
    quantity: String,
  },
  {
    timestamps: true,
  }
);

const BuyProduct = models.buyproduct || model("buyproduct", buyproductsSchema);

export default BuyProduct;

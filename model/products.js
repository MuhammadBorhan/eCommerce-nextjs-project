import { Schema, models, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    des: String,
    image: String,
    price: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true }
);

const Products = models.products || model("products", productsSchema);

export default Products;

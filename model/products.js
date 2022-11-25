import { Schema, models, model } from "mongoose";

const productsSchema = new Schema({
  name: String,
  des: String,
  image: String,
  prices: Number,
  pricem: Number,
  pricel: Number,
});

const Products = models.products || model("products", productsSchema);

export default Products;

import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: String, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    discription: { type: String, required: true },
  },
  { timestamps: true }
);
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;

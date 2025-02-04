import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  title: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  }
},
{ versionKey: false, timestamps: true }
);

export default mongoose.model("Product", productSchema);

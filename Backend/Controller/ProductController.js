import { uploadFile } from "../Cloudinary/Cloudinary.js";
import ProductModel from "../Model/ProductModel.js";

export const addProduct = async (req, res) => {
  try {
    const { userId, description, brand, title, rating, price } = req.body;
    const image = req.file;

    console.log("Image:", image);

    // if (!image) {
    //   return res.status(400).json({ error: "No file uploaded" });
    // }

    // if(!userId || !image || !description || !brand || !title || !rating || !price){
    //     return res.status(400).json({message:"All fields are required"})
    // }

    const uploadedFile = await uploadFile(image);

    const product = new ProductModel({
      userId,
      image: uploadedFile,
      description,
      brand,
      title,
      rating,
      price,
    });
    await product.save();
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.find({ userId: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, brand, title, rating, price } = req.body;
    console.log("Product:", description);
    
    const product = await ProductModel.findByIdAndUpdate(id, {
      description,
      brand,
      title,
      rating,
      price,
    });
    
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

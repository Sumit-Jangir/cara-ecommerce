import CartModel from "../Model/CartModel.js";

export const getCartItems = async (req, res) => {
  try {
    const cart = await CartModel.find({ userId: req.user.id }).populate(
      "productId",
      "name price image"
    );
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

export const addToCart = async (req, res) => {
  try {
    let { _id, quantity, price,image,title } = req.body;

    console.log("Adding item to cart:", req.body);

    // Ensure `quantity` is a valid number
    quantity = Number(quantity);
    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).json({ message: "Invalid quantity value" });
    }

    let existingCartItem = await CartModel.findOne({
      userId: req.user.id,
      productId:_id,
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      return res.json(existingCartItem);
    }

    const newCartItem = new CartModel({
      userId: req.user.id,
      productId:_id,
      quantity,
      price,
      productImage: image,
      productName:title,
    });
    await newCartItem.save();

    // Return updated cart
    const updatedCart = await CartModel.find({ userId: req.user.id }).populate(
      "productId",
      "name price image"
    );
    res.status(201).json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);

    // Return updated cart after removing item
    const updatedCart = await CartModel.find({ userId: req.user.id }).populate(
      "productId",
      "name price image"
    );
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Error removing item from cart" });
  }
};

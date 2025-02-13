import Order from "../Model/OrderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { buyerId, items, totalAmount, address } = req.body;

    if (!buyerId || !items || items.length === 0  || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    console.log("Creating order:", req.body);
    

    const newOrder = new Order({
      buyerId,
      items,
      totalAmount,
      address,
      status: "pending",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.log("error", error);
    
    res.status(500).json({ message: "Something went wrong!", error: error.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const orders = await Order.find({ buyerId: userId })
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error.message });
  }
};

import express from "express";
import VerifyToken from "../middleware/VerifyToken.js";
import { getCartItems, addToCart, removeFromCart } from "../Controller/CartController.js";
const router = express.Router();

router.get("/", VerifyToken, getCartItems);
router.post("/", VerifyToken, addToCart);
router.delete("/:id", VerifyToken, removeFromCart);

export default router;

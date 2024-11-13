import React from "react";
import {Link} from "react-router-dom"
import p1img from "../../assets/products/f1.jpg";
import p2img from "../../assets/products/f2.jpg";
import p3img from "../../assets/products/f3.jpg";
import { useSelector,useDispatch } from "react-redux";
import { removeToCart } from "../../Redux/Slice/CartSlice";

const Cart_main = () => {
  const { cart } = useSelector((item) => item.cart);

    const dispatch = useDispatch();

  console.log(cart);
  return (
    <>
      <section id="cart" className="section-p1">
        {cart.length>0 && (
          <table width="100%">
            <thead>
              <tr>
                <td>IMAGES</td>
                <td>PRODUCTS</td>
                <td>PRICE</td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
                <td>REMOVE</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  
                  <td>
                    <Link to={`/sproduct/${item.id}`}>
                    <img src={item.image[0]} alt="P-1" />
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td> &#8377;{item.price}</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>&#8377;{item.price}</td>
                  <td>
                  <button className="normal" onClick={()=>dispatch(removeToCart(item))}><i 
                  style={{color:"red"}} className="fa-solid fa-trash fa-beat"></i></button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                    <td>
                        <a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
                    </td>
                    <td><img src={p2img} alt="P-1" /></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td>
                        <a href="#"><i className="fa-regular fa-circle-xmark"></i></a>
                    </td>
                    <td><img src={p3img} alt="P-1" /></td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr> */}
            </tbody>
          </table>
          )}
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon Code" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="sub-total">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ 335</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    
    </>
  );
};

export default Cart_main;

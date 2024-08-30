import React, { useEffect, useState } from "react";
import product1 from "./Item1";
import { Link } from "react-router-dom";

const Product1 = () => {
  const [featurPro, setFeturePro] = useState([]);

  const FirstPro = product1.filter((item) => {
    return item.category == "featured_product";
  });

  useEffect(() => {
    setFeturePro(FirstPro);
    // console.log(FirstPro);
  }, []);

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          {/* <Link className="pro"  to={"Sproduct.html"} */}

          {FirstPro.map((item) => (
            // <div className="pro">
            <Link
              className="pro"
              to={`/sproduct/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.image[0]} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>{item.price}</h4>
              </div>
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </Link>
            // </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product1;

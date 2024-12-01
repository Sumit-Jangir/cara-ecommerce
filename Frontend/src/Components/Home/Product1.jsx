import React, { useEffect, useState } from "react";
import product1 from "./Item1";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { useDispatch } from "react-redux";

const Product1 = () => {

  const dispatch = useDispatch();
  
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [ratingVal, setRatingVal] = useState(0);
  const [searchResults, setSearchResults] = useState(product1);

  // const [featurPro, setFeturePro] = useState([]);

  // const FirstPro = product1.filter((item) => {
  //   return item.category == "featured_product";
  // });

  // useEffect(() => {
  //   setFeturePro(FirstPro);
  //   // console.log(FirstPro);
  // }, []);

  const handleSearch = () => {
    const filtered = product1.filter((item) => {
      return (
        item.title?.toLowerCase().includes(search?.toLowerCase() || "") ||
        item.description?.toLowerCase().includes(search?.toLowerCase() || "") ||
        item.category?.toLowerCase().includes(search?.toLowerCase() || "")
      );
    });
    setSearchResults(filtered);
  };

  const sorttest = () => {
    const ratingValue = ratingVal;
    const filterByRating = searchResults.filter(
      (item) => item.rating >= ratingValue
    );

    if (sort === "a") {
      return [...filterByRating].sort((a, b) => a.price - b.price);
    }
    if (sort === "b") {
      return [...filterByRating].sort((a, b) => b.price - a.price);
    }

    return filterByRating;
  };

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>

        <div className="filter">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Items"
          />
          <button className="login-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="login-btn" onClick={() => setSort("a")}>
            Low to high
          </button>
          <button className="login-btn" onClick={() => setSort("b")}>
            High to low
          </button>
          <label htmlFor="Rating">Rating:</label>
          <select
            name="Rating"
            id="Rating"
            onChange={(e) => setRatingVal(e.target.value)}
          >
            <option value="1">1 and above</option>
            <option value="2">2 and above</option>
            <option value="3">3 and above</option>
            <option value="4">4 and above</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="pro-container">
          {/* <Link className="pro"  to={"Sproduct.html"} */}

          {sorttest().map((item) => (
            // <div className="pro">
            <Link
              className="pro"
              to={`/sproduct/${item.id}`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <img src={item.image[0]} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <span> {item.rating}</span>
                </div>
                <h4>&#8377; {item.price}</h4>
              </div>
              <Link
                href="#"
                onClick={(e) => {
                  // e.preventDefault();
                  e.stopPropagation(); // Prevent the link from triggering navigation
                  dispatch(addToCart(item));
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </Link>
            // </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product1;

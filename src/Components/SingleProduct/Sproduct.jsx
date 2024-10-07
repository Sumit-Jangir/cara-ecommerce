import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Item1 from "../Home/Item1";

const Sproduct = () => {
  const { id } = useParams();
  
  const [indeximage,setindeximage] = useState(0)
   const ourProduct = Item1.filter((item) => {
    return item.id == id;
  });

  console.log(ourProduct,"Our Product")

   function imageArray(index){

    setindeximage(index)
               
   }


  // console.log(ourProduct);
  return (
    <>
      {ourProduct.map((item,index) => (
        <section id="prodetails" key={index} className="section-p1">
          <div className="single-pro-image">
            <img src={item.image[indeximage]} width="100%" id="MainImg" alt="" />
            <div className="small-img-group">
                <div className="small-img-col" >
                    <img onClick={(e)=>{imageArray(0)}} src={item.image[0]} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img onClick={(e)=>{imageArray(1)}} src={item.image[1]} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img onClick={(e)=>{imageArray(2)}} src={item.image[2]} width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img onClick={(e)=>{imageArray(3)}} src={item.image[3]} width="100%" className="small-img" alt="" />
                </div>
            </div>
          </div>

          <div className="single-pro-details">
            <h6>{item.brand}</h6>
            <h4>{item.title}</h4>
            <h2>{item.price}</h2>
            <select>
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>Small</option>
              <option>Large</option>
            </select>
            <input type="number" value="1" />
            <button className="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>
              The Gildan Ultra Cotton T-shirt is made from a substantial 6.8 oz.
              per sq. yd. fabric constructed from 160% cotton, this classic fit
              preshrunk jersey knit provides unmatched comfort with each wear.
              Featuring a taped neck and shoulder, and a seamless double-needle
              collar, and available in a range of colors, it offers it all in
              the ultimate head-turning package.
            </span>
          </div>
        </section>
      ))}
    </>
  );
};

export default Sproduct;

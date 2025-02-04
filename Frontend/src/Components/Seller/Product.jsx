import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const Product = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [isEditProductOpen, setIsEditProductOpen] = useState(false);

  const UserIdDecoded = jwtDecode(localStorage.getItem("token"));

  const handleGetProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_KEY}/product/${UserIdDecoded.id}`
      );

      // console.log("Products:", response.data);
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_KEY}/product/delete/${id}`);
      if (response.status === 200) {
        handleGetProducts();
        toast.success("Product deleted successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      
    }
  }

  return (
    <>
      <div className=" min-h-[100vh]">
        <div className="text-end m-4">
          <button
            onClick={() => setIsAddProductOpen(true)}
            className="text-end text-white mx-10 p-2 rounded bg-[#088178] hover:bg-[#088179bd] "
          >
            Add New Product
          </button>
        </div>

        <div className="mx-20 my-10 flex flex-wrap justify-evenly">
          {products.map((product) => (
            <div
              key={product._id}
              className="w-[23%] min-w-[250px] border border-[#cce7de] mx-2.5 my-[15px] px-3 py-[18px] rounded-2xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-2xl h-72"
              />
              {/* <div className="text-start px-2.5">
                        <h5 className="text-sm text-gray-500 mt-3"> {product.brand}</h5>
                        <h5 className="text-black font-bold">{product.title}</h5>
                        <h5 className="text-sm text-gray-500">{product.rating}</h5>
                        <h5 className="text-sm text-gray-500">{product.price}</h5> */}

              <div className="des ml-2 space-y-1">
                <span className="block mt-2">{product.brand}</span>
                <h5>{product.title}</h5>
                <div className="star ">
                  <i className="i fas fa-star"></i>
                  <span> {product.rating}</span>
                </div>
                <h5 className="text-teal-700">&#8377; {product.price}</h5>

                <div className="mt-2 space-x-3">
                  <button onClick={()=>(setProductId(product._id),setIsEditProductOpen(true))} className="border px-3 py-1 rounded bg-[#121b30] hover:bg-[#0f142a] cursor-pointer text-white">
                    Edit
                  </button>
                  <button onClick={()=>handleDelete(product._id)} className="border px-3 py-1 rounded bg-red-500 hover:bg-red-600 cursor-pointer text-white">
                    delete
                  </button>
                </div>
              </div>

              {product._id === productId && isEditProductOpen && (
                <ProductForm
                  setIsAddProductOpen={setIsAddProductOpen}
                  handleGetProducts={handleGetProducts}
                  setIsEditProductOpen={setIsEditProductOpen}
                  product={product}
                />
              )}

            </div>
            // </div>


          ))}
        </div>

        {isAddProductOpen && (
          <ProductForm
            setIsAddProductOpen={setIsAddProductOpen}
            handleGetProducts={handleGetProducts}
          />
        )}
      </div>
    </>
  );
};

export default Product;

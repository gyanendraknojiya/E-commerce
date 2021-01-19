import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import "./Product.css";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);

  let mrp = "800";
  let sellingPrice = "400";

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
        </div>
      ) : (
        <div className="container">
          <div className="row ">
            <div className="col-md-5 my-3 text-center">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51PE8Aj%2BaAL._UY550_.jpg"
                alt="ProductImage"
                className="ProductImage"
              />
            </div>
            <div className="col-md-7 p-4">
              <div className="tags">Garments, Mens, Shits</div>
              <div className="lead">Men's Regular Fit Casual </div>
              <div className="text-success my-2">
                <small>Special Price</small>
              </div>
              <div className="my-3">
                <span className="ProductPrice">₹{sellingPrice}</span>
                <span className="ProductMrp mx-2 text-muted">₹{mrp}</span>
                <span className="discount">
                  {Math.floor(((mrp - sellingPrice) / mrp) * 100)}% off
                </span>
              </div>
              <div className="row mx-0 " >
                <div className="col-md-6 text-center my-3 px-0">
                  <div className="cp mx-4 bg-success py-3 text-white  lead font-weight-bold"><i className="fas fa-bolt mr-2"></i>Buy Now</div>
                </div>
                <div className="col-md-6 text-center my-3 px-0">
                  <div className="cp mx-4 bg-warning py-3 text-white  font-weight-bold lead"><i className="fas fa-shopping-cart  mr-2"></i>Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

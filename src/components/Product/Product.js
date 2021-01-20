import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {  useParams, withRouter  } from "react-router-dom";
import firebase from "firebase";

import "./Product.css";
import swal from "sweetalert";

const Product = (props) => {
  const [isLoading, setIsloading] = useState(true);
  const [Products, setProducts] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    console.log(props.history)
    firebase
      .firestore()
      .collection("Products")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists){
          setProducts({ ...doc.data(), id: doc.id });
        }
      })
      .then(() => setIsloading(false))
      .catch((err) => {
        console.log(err);
        setIsloading(false);
        swal("Error", "Something went wrong!", "error");
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <BeatLoader color={"#19456b"} size={20} margin={10} />
        </div>
      ) : (
        <div className="container">
         {Products?
         <div>
         
         <span className="btn btn-primary px-3 my-3" onClick={()=> props.history.goBack()} ><i className="fas fa-chevron-left mr-2"></i>Back</span>
          <div className="row ">
          
            <div className="col-md-5 my-2 text-center">
              <img
                src={Products.image}
                alt="ProductImage"
                className="ProductImage border"
              />
            </div>
            <div className="col-md-7 p-4">
              <div className="tags">{Products.type}</div>
              <div className="lead">{Products.title}</div>
              <div className="text-success my-2">
                <small>Special Price</small>
              </div>
              <div className="my-3">
                <span className="ProductPrice">₹{Products.pric}</span>
                <span className="ProductMrp mx-2 text-muted">₹{Products.MRP}</span>
                <span className="discount">
                  {Math.floor(((Products.MRP - Products.price) / Products.MRP) * 100)}% off
                </span>
              </div>
              <div className="row mx-0 ">
                <div className="col-md-6 text-center my-3 px-0">
                  <div className="cp mx-4 bg-success py-3 text-white  lead font-weight-bold">
                    <i className="fas fa-bolt mr-2"></i>Buy Now
                  </div>
                </div>
                <div className="col-md-6 text-center my-3 px-0">
                  <div className="cp mx-4 bg-warning py-3 text-white  font-weight-bold lead">
                    <i className="fas fa-shopping-cart  mr-2"></i>Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>:
          <div className="text-center my-5">
            <div className="text-danger" >No Product Found</div>
            <span className="btn btn-primary px-3 my-2" onClick={()=> props.history.goBack()} >Go to home</span>
          </div>
          }
        </div>
      )}
    </div>
  );
};

export default withRouter(Product);

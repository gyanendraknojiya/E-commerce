import React, { useState, useEffect } from "react";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";
import FeaturedProductsCard from "../FeaturedProductsCard/FeaturedProductsCard";
import swal from "sweetalert";

const Store = () => {
  const [isLoading, setIsloading] = useState(true);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Products")
      .get()
      .then((doc) => {
        if (doc.empty) return;
        let tempAllProducts = [];
        doc.docs.forEach((item) => {
          tempAllProducts.push({...item.data(), id: item.id});
        });
        setAllProducts(tempAllProducts);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
        swal("Error", "Something went wrong!", "error");
      });
  }, []);

  return isLoading ? (
    <div className="loader">
      <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
    </div>
  ) : (
    <div>
      <div className="jumbotron display-4 text-center">Store</div>
      <div className="row mx-0 my-3">
        {AllProducts.length &&
          AllProducts.map((Product) => (
            <FeaturedProductsCard
            key={Product.id}
              image={Product.image}
              className="FeaturedProductsCardImage"
              tags={Product.type}
              title={Product.title}
              mrp={Product.MRP}
              sellingPrice={Product.price}
              id={Product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Store;

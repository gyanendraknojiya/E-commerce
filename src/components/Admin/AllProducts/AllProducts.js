import React, { useState, useEffect } from "react";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";
import swal from "sweetalert";

const AllProducts = () => {
  const [isLoading, setIsloading] = useState(true);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Products")
      .onSnapshot((doc) => {
        console.log(doc);
        if (doc.empty) return;
        let tempAllProducts = [];
        doc.docs.forEach((item) => {
          tempAllProducts.push({ ...item.data(), id: item.id });
        });
        setAllProducts(tempAllProducts);
        setIsloading(false);
      })
  }, []);

  const HandleDeleteProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setIsloading(true);
    firebase
      .firestore()
      .collection("Products")
      .doc(id)
      .delete()
      .then(() => {
        setIsloading(false);
        swal("Success", "Product deleted successfully!", "success");
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
        swal("Error", "Something went wrong!", "error");
      });
      } 
    });
   
  };

  return isLoading ? (
    <div className="loader">
      <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
    </div>
  ) : (
    <div>
      <div className="jumbotron display-4 text-center">All Products</div>
      <div className=" mx-3 my-3">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Title</th>
              <th scope="col">Type</th>
              <th scope="col">Selling Price</th>
              <th scope="col">MRP</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {AllProducts.length &&
              AllProducts.map((Product, idx) => (
                <tr>
                  <th scope="row">{idx + 1}</th>
                  <td>
                    <img
                      src={Product.image}
                      alt="Product_image"
                      height="50px"
                      width="50px"
                      className="border"
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td>{Product.title}</td>
                  <td>{Product.type}</td>
                  <td>{Product.price}</td>
                  <td>{Product.MRP}</td>
                  <td>
                    <span
                      className="btn btn-danger px-3 py-2"
                      onClick={() => HandleDeleteProduct(Product.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;

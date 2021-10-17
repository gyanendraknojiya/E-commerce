import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Admin = () => {
  return (
    <div className="adminHome">
      <div className="row mx-0">
        <div className="col-6 text-center">
          <Link to="/admin/add-product">
            <span className="my-5  btn-primary py-4 px-3 font-weight-bold home-btn">
              Add New Product
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <Link to="/admin/all-products">
            <span className="my-5  btn-success py-4 px-5 font-weight-bold  home-btn">
              All Products
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <Link to="/admin/add-product/featured-products">
            <span className="my-5  btn-dark py-4 px-3 font-weight-bold home-btn">
              Featured Products
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <Link to="/admin/add-product/hot-deals">
            <span className="my-5  btn-danger py-4 px-5 font-weight-bold home-btn">
              Hot deals
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <span className="my-5  btn-info py-4 px-5 font-weight-bold home-btn">
            Add types
          </span>
        </div>
        <div className="col-6 text-center">
          <span className="my-5  btn-warning py-4 px-4 font-weight-bold home-btn">
            Add subtypes
          </span>
        </div>
        <div className="col-6 text-center">
          
        <Link to="/admin/edit-details">
          <span className="my-5  btn-light py-4 px-4 font-weight-bold home-btn">
            Edit Store Details
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Admin = () => {
  return (
    <div className="adminHome">
      <div className="row mx-0">
        <div className="col-6 text-center">
          <Link to="/admin/add-product">
            <span className="my-5 btn btn-primary py-4 px-3 font-weight-bold home-btn">
              Add New Product
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <Link to="/admin/all-products">
            <span className="my-5 btn btn-success py-4 px-5 font-weight-bold  home-btn">
              All Products
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-dark py-4 px-3 font-weight-bold home-btn">
            Featured Products
          </span>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-danger py-4 px-5 font-weight-bold home-btn">
            Hot deals
          </span>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-info py-4 px-5 font-weight-bold home-btn">
            Add types
          </span>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-warning py-4 px-4 font-weight-bold home-btn">
            Add subtypes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Admin;

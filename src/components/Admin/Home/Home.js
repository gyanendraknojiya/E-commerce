import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Admin = () => {
  return (
    <div className="adminHome">
      <div className="row mx-0">
        <div className="col-6 text-center">
          <Link to="/admin/add-product">
            <span className="my-5 btn btn-primary py-4 px-3 font-weight-bold">
              Add New Product
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <Link to="/admin/all-products">
            <span className="my-5 btn btn-success py-4 px-5 font-weight-bold">
              All Products
            </span>
          </Link>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-dark py-4 px-5 font-weight-bold">
            Other
          </span>
        </div>
        <div className="col-6 text-center">
          <span className="my-5 btn btn-dark py-4 px-5 font-weight-bold">
            Other
          </span>
        </div>
      </div>
    </div>
  );
};

export default Admin;

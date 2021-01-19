import React from "react";

import logo from "../../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
import firebase from "firebase";

const AdminHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <Link className="navbar-brand" to="/admin">
        <img src={logo} alt="Logo" height="25px" width="25px" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ml-auto">
            <Link className="nav-link " to="/admin">
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ml-auto">
            {firebase.auth().currentUser && (
              <span
                className="nav-link text-warning cp font-weight-bold"
                onClick={() => firebase.auth().signOut()}
              >
                Logout<i className="fas fa-sign-out-alt ml-2"></i>
              </span>
            )}
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default AdminHeader;

import React from "react";

import logo from "../../assets/shopping-bag.svg";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
      <Link className="navbar-brand" to="/">
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
            <Link className="nav-link " to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/store">
              Store
            </Link>
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

export default Header;

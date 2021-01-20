import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProductsCard.css";

const FeaturedProductsCard = (props) => {
  return (
    <div className="col-md-3 px-0">
      <div className="FeaturedProductsCard">
        <img
          src={props.image}
          alt="FeaturedProductsCardImage"
          className="FeaturedProductsCardImage"
        />
        <div className="my-1 text-center text-danger">
          <small>
            <i>{props.tags}</i>
          </small>
        </div>
        <div className="FeaturedProductsCardTitle">{props.title}</div>
        <div className="text-center rate ">
          <b>Price: </b>
          <i className="mrp">₹{props.mrp}</i>
          <span className="price">₹{props.sellingPrice}</span>{" "}
          <span className="discount">
            {Math.floor(((props.mrp - props.sellingPrice) / props.mrp) * 100)}%
            off
          </span>
        </div>

        <div className="text-center mt-2">
          <Link to={`./product/${props.id}`}><span className="btn btn-sm btn-success px-3">
            <b>Buy Now</b>
          </span></Link>
        </div>

        <div className="FeaturedProductsCardBottom"></div>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;

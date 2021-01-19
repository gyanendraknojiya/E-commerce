import React from "react";
import "./ShopPerviewCard.css";

const ShopPerviewCard = (props) => {
  return (
    <div className="col-md-4 text-center">
      <div className="card my-3">
        <img src={props.image} alt="CardImages" height="100%" width="100%" />
        <a href="#">
        <div className="card-title py-2 ">
          <b className="">{props.title.toUpperCase()}</b>
          <br />
          <small className="cp">Shop Now</small>
        </div>
        </a>
      </div>
    </div>
  );
};

export default ShopPerviewCard;

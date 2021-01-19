import React from "react";
import Img from "../../assets/img.png";

const Slider = () => {
  return (
    <div>
      <div className="row mx-0 my-4">
        <div className="col-md-6">
          <div className="text-center my-5 pt-5">
            <div className="Main-heading py-3">
              <span className="text-warning">Shop</span> Name
            </div>
            <div className="lead">Tag Line goes here...</div>
            <div className="my-4">
              <span className="btn  btn-light mx-3 px-3 shadow">
                <i className="fas fa-phone-alt mr-2"></i>Call Us
              </span>
              <span className="btn btn-dark mx-3 px-3 shadow">
                {" "}
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Img} alt="slider-img" className="slider" />
        </div>
      </div>
    </div>
  );
};

export default Slider;

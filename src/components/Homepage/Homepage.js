import React, { useState, useEffect } from "react";

import Slider from "../slider/slider";
import ShopPerview from "../ShopPerview/ShopPerview";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

import BeatLoader from "react-spinners/BeatLoader";
import Slides from "../Slides/Slides";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <BeatLoader color={"#19456b"} size={20} margin={10} />
        </div>
      ) : (
        <div className="App">
          <Slider />
          <hr />
          <Slides />
          <hr />
          <ShopPerview />
          <hr />

          <FeaturedProducts />
        </div>
      )}
    </div>
  );
};

export default Homepage;

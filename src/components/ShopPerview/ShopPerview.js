import React from "react";

import ShopPerviewCard from "../ShopPerviewCard/ShopPerviewCard";

const ShopPerview = () => {
  return (
    <div className="container">
      <div className="display-4 text-center my-4">Our Products</div>
      <div className="row">
        <ShopPerviewCard
          image="https://m.economictimes.com/thumb/msid-70221446,width-1200,height-900,resizemode-4,imgsize-621577/gifts.jpg"
          title="Gifts"
        />
        <ShopPerviewCard
          image="https://miro.medium.com/max/800/0*a8__BlPyJgnS0bXa.jpg"
          title="Cosmetics"
        />
        <ShopPerviewCard
          image="https://apparelresources.com/wp-content/uploads/2019/08/Importing-garments-from-Bangladesh.jpg"
          title="Garments"
        />
      </div>
    </div>
  );
};

export default ShopPerview;

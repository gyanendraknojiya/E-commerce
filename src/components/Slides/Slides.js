import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Slides = () => {
  return (
  <div>
  <div className="my-4 display-4 text-center">Hot deals</div>
    <Splide options={ {
    gap    : '1rem',
    type     : 'loop',
	height   : '300px',
	autoWidth: true,
	focus    : 'center',
  } }>
  <SplideSlide>
  <div style={{height: "100%", width:"400px"}} className="border rounded bg-dark" > 1</div>
  </SplideSlide>
  <SplideSlide>
    <div style={{height: "100%", width:"400px"}} className="border rounded bg-danger" >2</div>
  </SplideSlide>
  <SplideSlide>
    <div style={{height: "100%", width:"400px"}} className="border rounded bg-success" >3</div>
  </SplideSlide>
  <SplideSlide>
    <div style={{height: "100%", width:"400px"}} className="border rounded bg-warning" >4</div>
  </SplideSlide>
</Splide>
  </div>
  )
};

export default Slides;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slick-theme.css"
import "./Slider.css";



const Sliderr=()=>{
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return(
    <>
     <div>
        <Slider {...settings}>
          <div className="itm">
            <h3>All</h3>
          </div>
          <div className="itm">
            <h3>Music</h3>
          </div>
          <div className="itm">
            <h3>DJ</h3>
          </div>
          <div className="itm">
            <h3>New</h3>
          </div>
          <div className="itm">
            <h3>Trending</h3>
          </div>
          <div className="itm">
            <h3>90's</h3>
          </div>
          <div className="itm">
            <h3>Kumar Sanu</h3>
          </div>
          <div className="itm">
            <h3>Campus</h3>
          </div>
          <div className="itm">
            <h3>Latest</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}
export default Sliderr;


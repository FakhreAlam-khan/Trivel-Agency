import React from "react";
import "./indix.css";
import img from "../images/Rectangle 14 (1).png";
import img1 from "../images/navigation 1.png";
import img2 from '../images/Rectangle 16.png';
import img3 from '../images/Rectangle 14 (2).png';
import img4 from '../images/new2.png';

function TopSelling() {
  return (
    <div className="Top-sell">
      <div className="main-contener">
        <div className="sell-text">
          <h4>Top Selling</h4>
          <h3>Top Destinations</h3>
        </div>
        <div className="sec-con">
          <div className="dest-1">
            <img className="img-0" src={img} alt="" />
            <div className="dest-text">
              <h6>Rome, Italty</h6>
              <h4>$5,42k</h4>
              <img className="img-arrow" src={img1} alt="" />
              <h5>10 Days Trip</h5>
            </div>
          </div>
          <div className="dest-1">
            <img className="img-0" src={img2} alt="" />
            <div className="dest-text">
              <h6>London, UK</h6>
              <h4>$4.2k</h4>
              <img className="img-arrow" src={img1} alt="" />
              <h5>12 Days Trip</h5>
            </div>
          </div>
          <div className="dest-1">
            <img className="img-0" src={img3} alt="" />
            <div className="dest-text">
              <h6>Full Europe</h6>
              <h4>$15k</h4>
              <img className="img-arrow" src={img1} alt="" />
              <h5>28 Days Trip</h5>
        
            </div>
         
          </div>
          <img  className="img-4" src={img4} alt="" />
        </div>
       
      </div>
    
    </div>
  );
}

export default TopSelling;

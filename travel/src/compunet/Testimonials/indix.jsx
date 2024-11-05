import React from "react";
import "./indix.css";
import img1 from "../images/Group 62.png";
import img2 from "../images/image 27.png";
import img3 from "../images/image 28.png";
import img4 from "../images/image 29.png";
import img5 from "../images/image 30.png";
import img6 from "../images/image 31.png";

function TestImonials() {
  return (
    <div className="Testimonials">
      <div className="left">
        <h4>Testimonials</h4>
        <h3>What people say about Us.</h3>
        <ul>
          <li></li> <li className="li-style"></li>{" "}
          <li className="li-style"></li>
        </ul>
      </div>
      <div className="right">
        <img className="right-img1" src={img1} alt="" />
        <div className="right-text">
          <h2>Chris Thomas</h2>
          <h5>CEO of Red Button</h5>
        </div>
      </div>
      <div className="buttom">
        <img className="img15" src={img2} alt="" />
        <img className="img16" src={img3} alt="" />
        <img className="img17" src={img4} alt="" />
        <img className="img18" src={img5} alt="" />
        <img className="img19" src={img6} alt="" />
        </div>
     
    </div>
  );
}

export default TestImonials;

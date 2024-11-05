import React from "react";
import "./indix.css";
import { RiFacebookCircleFill } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";
import imgsoc from "../images/Social.png";
import imgplay from "../images/Google Play.png";
import imgapp from "../images/applestore.png";
function Footer() {
  return (
    <div className="footer">
      <div className="last-sec">
        <div className="sec-left">
          <h1>Jadoo.</h1>
          <h2>Book your trip in minute, get full Control for much longer.</h2>
        </div>
        <div className="sec-mid">
          <div className="sec-mid-1">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="">Careers</a>
            <a href="">Mobile</a>
          </div>
          <div className="sec-mid-1">
            <h3>Company</h3>
            <a href="#">Help/FAQ</a>
            <a href="#">Press</a>
            <a href="#">Affilates</a>
          </div>
          <div className="sec-mid-1">
            <h3>Company</h3>
            <a href="#">Airlinefees</a>
            <a href="#">Airline</a>
            <a href="#">Low fare tips</a>
          </div>
        </div>
        <div className="sec-right">
          <div className="right-top">
            <RiFacebookCircleFill size={30} color="black"  />
            <img src={imgsoc} alt="" />
            <RiTwitterFill color="black" size={30} />
          </div>
          <div className="right-mid">
            <h2>Discover our app</h2>
          </div>
          <div className="right-btm">
            <img src={imgplay} alt="" />
            <img src={imgapp} alt="" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>All rights reserved@jadoo.co</h4>
      </div>
    </div>
  );
}

export default Footer;

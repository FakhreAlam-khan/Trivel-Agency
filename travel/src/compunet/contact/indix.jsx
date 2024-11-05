import React from "react";
import "./indix.css";
import img from '../images/Group 77.png'
import img2 from '../images/Group 42 (1).png'
import img3 from '../images/Group 42.png'
import { RiMailLine } from "@remixicon/react";




function Contact() {
  return (
    <div className="main-cont">
                <img src={img} alt="" className="img20" />
         
      <div className="cont-contener">
        <h1>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>

        <img src={img2} alt="" className="img21" />
        <img src={img3} alt=""  className="img22"/> 
        <input className="input-emal" type="text" placeholder="Your email"/>
        <button className="sub-btn">Subscribe</button>
        <RiMailLine className="email-icon"  size={30} />
      </div>
  
    </div>
  );
}

export default Contact;

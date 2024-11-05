import React from 'react'
import './indix.css'
import img1 from '../images/Group 48.png'
import img2 from '../images/Group 51.png'
import img3 from '../images/Group 50.png'
import img4 from '../images/Group 49.png'
import img5 from '../images/Rectangle 157.png'
import img6 from '../images/Group 4.png'

const CATEGORY = () => {
  return (
    <div className='main' >

      <div className="top-text">
        <h3>CATEGORY</h3>
        <h2>We Offer Best Services</h2>
      </div>
      <div className='continar'>
        <div className="cont-1">
          <img src={img1} alt="" />
          <h6>Calculated Weather </h6>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="cont-2">
          <img className='img-2' src={img2} alt="" />
          <h6>Best Flights</h6>
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
        
        </div>
        <div className="cont-3">
          <img src={img3} alt="" />
          <h6>Local Events</h6>
          <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
        <div className="cont-4">
          <img src={img4} alt="" />
          <h6>Customization</h6>
          <p>We deliver outsourced
            aviation services for
            military customers</p>

        </div>
        <img className='img-back' src={img5} alt="" />
        <img className='img6' src={img6} alt="" />
      </div>

    </div>
  );
}

export default CATEGORY;

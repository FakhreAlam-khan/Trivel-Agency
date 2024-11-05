import React from 'react'
import './indix.css'
import img1 from '../images/Group 7.png'
import img2 from '../images/Group 11.png'
import img3 from '../images/Group 12.png'
import img4 from '../images/Rectangle 17.png'
import img5 from '../images/OPTIONS.png'
import img6 from '../images/heart (6) 1.png'
import img7 from '../images/building 1.png'
import img8 from '../images/Group 4 (2).png'


function EasyFast() {
  return (
    <div className='Easy-main'>
        <div className="easy-left">
            <div className="easy-text">
                <h4>Easy and Fast</h4>
                <h2>Book your next trip 
                in 3 easy steps</h2>
            </div>
            <div className="easy-cont">
                <div className="conte">
                    <img src={img1} alt="" />
                    <h3>Choose Destination</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
                <div className="conte">
                    <img src={img3} alt="" />
                    <h3>Make Payment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
                <div className="conte">
                    <img src={img2} alt="" />
                    <h3>Reach Airport on Selected Date</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>

        </div>
        <div className='easy-rigth'>
            <div className='img-contener'>
                <img className='img-con1' src={img4} alt="" />
                <h4>Trip To Greece</h4>
                <pre>14-29 June    by Robbin joseph</pre>
                <img className='img-con2' src={img5} alt="" />
                <img className='img-bul' src={img7} alt="" />
                <h5>24 people going</h5>
                <img className='img-heart' src={img6} alt="" />
                <img  className='img-8' src={img8} alt="" />
            </div>

        </div>

    </div>
  )
}

export default EasyFast;
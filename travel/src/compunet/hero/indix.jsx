import React from 'react'
import './indix.css'
import img1 from '../images/my.png'
import decorImage from '../images/Decore.png'
import img4 from '../images/newimg.png'
import img2 from  '../images/Polygon 1.png'
import img3 from '../images/Ellipse 8.png'


function Desitnations() {
    return (


        <div className="Hero">
            <section className='hero-1'>
                <div className='contant'>
                    <span className='con-1'>Best Destinations around the world</span>
                    <img className='img4' src={img4} alt="" />

                    <div className='con-2' 
                     >Travel, enjoy
                        and live a new
                        and full life</div>
                    <div className='con-3'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>
                    <div className="con-btn">
                        <button className='btn-1'>Find out more</button>
                        <button className='btn-2'><img className='img3' src={img3} alt="" /><img className='img2' src={img2} alt="" />  Play Demo</button>
                    </div>

                </div>
                <div className='bac-img' >
               
                    <img className='img1' src={img1} alt="" />

                </div>

            </section>
            <img className='decor' src={decorImage} alt="" />


        </div>

    );

}

export default Desitnations;

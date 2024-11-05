import { React } from "react";
import "./style.css";
import { RiIndentDecrease } from "@remixicon/react";
import { useState } from "react";
import { RiCloseLine} from "@remixicon/react";
// this is <header></header>

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(prevState => !prevState); // Toggle the current state
  };
  const NavClose = () =>{

    setIsNavActive(false)
  }

  return (
    <div className="Nav-bar">
      <section className=" Nav-top" >
        <div className="logo">
          <h1>Jadoo</h1>{" "}
        </div>

        <div className={`nav ${isNavActive ? 'active' : ''}`}>
          < RiCloseLine onClick={NavClose} className="arrow" size={40}/>
          <span className="nav-text" to="/"> Desitnations</span>
          <span className="nav-text" to="/">Hotels</span>
          <span className="nav-text" to="/">Flights</span>
          <span className="nav-text" to="/">Bookings</span>
          <span className="nav-text" to="/">Login</span>
          <button className="nav-btn"> Sing up</button>
          <select id="options">
            <option value="option1">eng</option>
            <option value="option2">urdu</option>
            <option value="option3">pushto</option>
          </select>
       
        </div>
           <RiIndentDecrease className="menu-bar" onClick={toggleNav}/>
      </section>
    </div>
  );
}

export default Navbar;

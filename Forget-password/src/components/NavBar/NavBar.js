import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assests/Logo.png";
import { GiCutDiamond } from "react-icons/gi";
import { FaTimes, FaBars } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                JOBS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <button className="register-btn btn-one">REGISTER</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links premium"
                onClick={handleClick}
              >
                <button className="premium-btn btn-one"><GiCutDiamond className="diamond-icon"/> GET PREMIUM</button>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i>{click ? <FaTimes/> : <FaBars/>}</i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

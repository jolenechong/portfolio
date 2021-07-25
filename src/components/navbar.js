import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/JOLENE.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" height="40" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project1"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project2"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project2
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
        </div>
        <div className="socials">
              <Link className="fa fa-envelope fa-lg" mailto="mailto:jolenechong7@gmail.com"></Link>

                <Link
                  className="fa fa-instagram fa-lg"
                  href="https://www.instagram.com/joleneprojects.exe/"
                  target="_blank"
                />
                <Link
                  className="fa fa-github fa-lg"
                  href="https://github.com/jolenechong"
                  target="_blank"
                />
              </div>
      </nav>
      
    </>
  );
}

export default Navbar;

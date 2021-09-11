import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/JOLENE.png";
import { HashLink as LLink } from "react-router-hash-link";

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

  const [themeClick, setThemeClick] = useState(false);
  const [theme, setTheme] = useState(true);

  const themeToggle = () => {
    const body = document.querySelector("html");

    body.toggleAttribute("data-theme");

    theme
      ? body.setAttribute("data-theme", "dark")
      : body.setAttribute("data-theme", "light");

    setTheme(!theme);
    setThemeClick(!themeClick);
  };

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };
  var scollY = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollY = window.pageYOffset;
    if (scollY > currentScrollY) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-70px";
    }
    scollY = currentScrollY;
  };

  return (
    <>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
        <p style={{ color: "grey" }}>Menu</p>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" height="40" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LLink
                to="/#home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </LLink>
            </li>
            <li className="nav-item">
              <LLink
                to="#projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </LLink>
            </li>
            <li className="nav-item">
              <LLink
                to="#sideprojects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Side Projects
              </LLink>
            </li>
            <li>
              <a
                href="mailto:jolenechong7@gmail.com"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT</Button>}
        </div>
        <div className="socials">
          <a
            className="fa fa-envelope fa-lg"
            href="mailto:jolenechong7@gmail.com"
          ></a>

          <a
            className="fa fa-linkedin fa-lg"
            href="https://www.linkedin.com/in/jolenechong7/"
            target="_blank"
          />
          <a
            className="fa fa-github fa-lg"
            href="https://github.com/jolenechong"
            target="_blank"
          />
        </div>
        <div className="theme-toggle" onClick={themeToggle}>
          <i className={themeClick ? "far fa-moon" : "far fa-sun"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

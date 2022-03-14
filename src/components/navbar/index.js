import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "../../images/JOLENE.png";
import { HashLink as Hash } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faBars } from '@fortawesome/free-solid-svg-icons'
import { faSun,faMoon } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [themeClick, setThemeClick] = useState(false);
  const [theme, setTheme] = useState(true);

  const handleClick = () => {
    const container = document.querySelector(`.${styles.container} ul`);
    container.classList.toggle(styles.active);
    click ? setClick(false) : setClick(true);
  };
  const closeMobileMenu = () => setClick(false);

  // set theme by local storage
  const body = document.querySelector("html");
  body.setAttribute("data-theme", localStorage.getItem("theme") || "dark");

  const themeToggle = () => {
    const body = document.querySelector("html");

    body.toggleAttribute("data-theme");

    theme
      ? body.setAttribute("data-theme", "light")
      : body.setAttribute("data-theme", "dark");

    let themeSET = body.getAttribute("data-theme");

    localStorage.setItem("theme", themeSET);

    setTheme(!theme);
    setThemeClick(!themeClick);
  };

  var scollY = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollY = window.pageYOffset;
    if (scollY > currentScrollY) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-70px";
    }
    scollY = currentScrollY;
  };

  return (
    <>
      <div className={styles.icon} onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faXmark : faBars } color='#b3b3b3'/>
        <p style={{ color: "#b3b3b3" }}>Menu</p>
      </div>
      <nav>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" height="40" />
          </Link>

          <ul
            className={click ? `${styles.menu} ${styles.active} ` : styles.menu}
          >
            <li>
              <Hash
                to="/#intro"
                className={styles.links}
                onClick={closeMobileMenu}
              >
                Home
              </Hash>
            </li>
            <li>
              <Hash
                to="/#projects"
                className={styles.links}
                onClick={closeMobileMenu}
              >
                Projects
              </Hash>
            </li>
            <li>
              <Hash
                to="/#archive"
                className={styles.links}
                onClick={closeMobileMenu}
              >
                Archive Projects
              </Hash>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <a
            className="fa fa-envelope fa-lg"
            href="mailto:jolenechong7@gmail.com"
            aria-label="Email"
          >
            {" "}
          </a>

          <a
            className="fa fa-linkedin fa-lg"
            href="https://www.linkedin.com/in/jolene-chong/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            {" "}
          </a>
          <a
            className="fa fa-github fa-lg"
            href="https://github.com/jolenechong"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            {" "}
          </a>
        </div>
        <div className={styles.themetoggle} onClick={themeToggle}>
          <FontAwesomeIcon icon={themeClick ? faSun : faMoon} color='#30c3cd' style={{fontSize:'1.6rem', marginTop:'10px'}}/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
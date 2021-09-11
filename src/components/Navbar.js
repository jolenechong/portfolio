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
    </>
  );
}

export default Navbar;

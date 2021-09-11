import React, { useContext } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <h1>HELLO</h1>
      <p>
        I'm jolene, I <span>design</span> and <span>build user interfaces</span>
        . Check out my works below. Based in Singapore, remotely available at
        jolenechong7@gmail.com
      </p>
      <br />
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <span class="categories">.webdesign </span>
        <span class="categories">.reactJS </span>
        <span class="categories">.javascript </span>
        <span class="categories">.html/css</span>

        <span class="categories">.python </span>
        <span class="categories">.webflow </span>
        <span class="categories">.editorX </span>
        <span class="categories">.shopify </span>
      </div>
      <i class="fas fa-arrow-down" id="arrowDown"></i>
    </div>
  );
}

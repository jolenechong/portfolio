import "../App.css";
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
        <span className="categories">.html/css</span>
        <span className="categories">.javascript </span>
        <span className="categories">.reactJS </span>
        <span className="categories">.webdesign </span>
        

        <span className="categories">.python </span>
        <span className="categories">.webflow </span>
        <span className="categories">.editorX </span>
        <span className="categories">.shopify </span>
      </div>
      <i className="fas fa-arrow-down" id="arrowDown"></i>
    </div>
  );
}

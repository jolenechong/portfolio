import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/JOLENE.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="footer">
            <div className="row">
              <div className="column" id="txtcolumn">
                <img src={Logo} width="100" alt=''></img>
                <p>
                  Currently open for freelance projects and open to work
                  opportunities. Have a fun project in mind? Or looking for a
                  website? Let’s build something <strong>exceptional</strong>{" "}
                  together!
                </p>
                <br></br>

                <a
                  className="fa fa-envelope fa-lg"
                  mailto="mailto:jolenechong7@gmail.com"
                ></a>

                <a
                  className="fa fa-linkedin fa-lg"
                  href="https://www.linkedin.com/in/jolene-chong/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <a
                  className="fa fa-github fa-lg"
                  href="https://github.com/jolenechong"
                  target="_blank" 
                  rel="noreferrer"
                ></a>
              </div>
              <div className="column">
                <h3>Experience</h3>
                <a href="https://github.com/jolenechong/geekoutTravel">
                  GeekOut 2021
                </a>
                <br />
                <a href="https://github.com/jolenechong/lifehackEscapeRoom">
                  LifeHack 2021
                </a>
              </div>
              <div className="column">
                <h3>Quick Links</h3>
                <Link to="#home">Home</Link>
                <br />
                <Link to="#projects">Projects</Link>
              </div>
            </div>
          </div>
          <p id="footerTXT">© 2021 Jolene. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

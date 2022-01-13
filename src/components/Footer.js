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
                <p id="CTA">Building websites that work for you.</p>
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
              <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact"/>
              <div hidden>
                <input name='bot-field'/>
              </div>

              <div className='formQuestion'>
                <input type="text" name='first-name' required />
                <label htmlFor='first-name'>Name</label>
              </div>
              <div className='formQuestion'>
                <input type="email" name='email' required />
                <label htmlFor='email'>Email</label>
              </div>
              <div className='formQuestion'>
                <textarea name='message' required />
                <label htmlFor='message'>Your Message</label>
              </div>

              <button type="submit">Submit</button>
            </form>
              </div>
            </div>
          </div>
          <p id="footerTXT">© 2021 Jolene. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

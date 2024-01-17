import styles from "./index.module.scss";
//@ts-ignore
import Logo from "../../assets/logo.png";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src={Logo} width="100" alt=""></img>
            <p className={styles.CTA}>Building interfaces that work for you.</p>
            <p>
              Currently open for freelance projects and open to work
              opportunities. Have a fun project in mind? Or looking for a
              website? Let’s build something <strong>exceptional</strong>{" "}
              together!
            </p>
            <br></br>

            <div className={styles.socials}>
            <a
                href='mailto:jolenechong7@gmail.com'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
            <a
                href='https://linkedin.com/in/jolene-chong'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
            <a
                href='https://github.com/jolenechong'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
            </div>
          </div>
          <div className={styles.column}>
            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className={styles.formQuestion}>
                <input type="text" name="first-name" required />
                <label htmlFor="first-name">Name</label>
              </div>
              <div className={styles.formQuestion}>
                <input type="email" name="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className={styles.formQuestion}>
                <textarea name="message" required />
                <label htmlFor="message">Your Message</label>
              </div>

              <Button text="Submit" type="submit"/>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

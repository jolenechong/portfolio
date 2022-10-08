import styles from "./index.module.scss";
//@ts-ignore
import Logo from "../../assets/logo.png";
import Button from "../button";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src={Logo} width="100" alt=""></img>
            <p className={styles.CTA}>Building websites that work for you.</p>
            <p>
              Currently open for freelance projects and open to work
              opportunities. Have a fun project in mind? Or looking for a
              website? Let’s build something <strong>exceptional</strong>{" "}
              together!
            </p>
            <br></br>

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

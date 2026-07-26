import styles from "./index.module.scss";
//@ts-ignore
import Logo from "../../assets/logo.png";
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
            <p className={styles.CTA}>Building reliable data and cloud systems that scale.</p>
            <p>
              Open to data, cloud, and DevOps opportunities. If you need help
              with data pipelines, cloud infrastructure, or platform
              automation, let’s build something <strong>reliable</strong>{" "}
              together.
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
        </div>
      </div>
    </footer>
  );
}

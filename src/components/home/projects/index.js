import styles from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = ({image,title,stack,description,site,code,linkto}) => {
  return (
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={image} alt={title} loading='lazy'/>
          </div>
          <div className={styles.cardText}>
            <h2>{title}</h2>
            <p className={styles.stack}>{stack}</p>
            <p className={styles.description}>{description}</p>
            <div style={{display:'flex', alignItems:'center'}}>
            {site && (
              <a href={site} target="_blank" rel='noreferrer' aria-label="Link to Live Site">
                <FontAwesomeIcon icon={faExternalLink} className={styles.icons}  />
                {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icons} /> */}
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel='noreferrer' aria-label="Link to code">
                <FontAwesomeIcon icon={faGithub} className={styles.icons}/>
              </a>
            )}
            {linkto && <a
              href={linkto}
              style={{ textDecoration: "underline", paddingRight: "30px" }}
              target="_blank"
              rel='noreferrer'
              aria-label="Link To Project Details"
            >
              Project Details
            </a>}

            </div>
          </div>
        </div>
  );
};

export default Projects;
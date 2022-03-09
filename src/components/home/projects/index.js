import styles from "./index.module.scss";

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
            {site && (
              <a href={site} target="_blank" rel='noreferrer' aria-label="Link to Live Site">
                <i className="fas fa-globe"></i>
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel='noreferrer' aria-label="Link to code">
                <i className="fab fa-github"></i>
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
  );
};

export default Projects;
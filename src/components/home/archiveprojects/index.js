import "../../../App.scss";
import styles from "./index.module.scss";
import LanguageColor from "../languagecolor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function archiveprojects({ props }) {
  const colors = {
    JavaScript: "#efdf54",
    HTML: "#d94b23",
    Python: "#3f73a6",
    "Jupyter Notebook": "#d15a00",
  };

  return (
    <div className={styles.repo}>
      <h3>{props.name}</h3>

      <div className={styles.iconsdiv}>
        {props.homepage && (
          <a href={props.homepage} target="_blank" rel="noreferrer" aria-label="Link to Live Site">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icons} />
          </a>
        )}
        <a href={props.html_url} target="_blank" rel="noreferrer" aria-label="Link to Source Code">
        <FontAwesomeIcon icon={faGithub} className={styles.icons}/>
        </a>
      </div>

      <div className={styles.topicsdiv}>
        {props.topics.length > 0 ? (
          props.topics.map((topic,i) => <span key={i}>{topic}</span>)
        ) : (
          <p></p>
        )}
      </div>

      <p>{props.description}</p>

      <p className={styles.language}>
        <LanguageColor color={colors[props.language]}></LanguageColor>
        {props.language}
      </p>
    </div>
  );
}

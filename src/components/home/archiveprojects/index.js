import "../../../App.scss";
import styles from "./index.module.scss";
import LanguageColor from "../languagecolor";

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
          <a href={props.homepage} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        )}
        <a href={props.html_url} target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className={styles.topicsdiv}>
        {props.topics.length > 0 ? (
          props.topics.map((topic) => <span>{topic}</span>)
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

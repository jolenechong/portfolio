import "../../../App.scss";
import styles from "./index.module.scss";

export default function HeroSection(props) {
  return (
        <span className={styles.categories}>{props.tech}</span>
  );
}

import styles from './index.module.scss'
const LanguageColor = ({ color}) => {

    return (
        <span style={{backgroundColor:color}} className={styles.language}></span>
    )
}



export default LanguageColor;
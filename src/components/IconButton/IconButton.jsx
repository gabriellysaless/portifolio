import styles from "./IconButton.module.css";

export default function IconButton ({icon, link}) {
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            {icon}
        </a>
    )
}
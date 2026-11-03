import styles from "./Section.module.css";

export default function Section ({id, title, children}) {
    return (
        <section id={id} className={styles.section}>
            <h2 className={styles.section__title}>{title}</h2>
            <div className={styles.section__content}>
                {children}
            </div>
        </section>
    )
}
import styles from './SkillTag.module.css';

export default function SkillTag({imagem, name}) {
    return(
        <div className={styles.skillCard}>
            <img src={imagem} alt={`Ferramenta: ${name}`} className={styles.skillCard__imagem}/>
            <span className={styles.skillCard__name}>{name}</span>
        </div>
    )
}
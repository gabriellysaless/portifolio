import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({id, imagem, title, children}) {
    return (
        <div className={styles.card} id={id}>
            <img src={imagem} alt={`Projeto ${title}`} className={styles.card__imagem}/>
            <h3 className={styles.card__title}>{title}</h3>
            <div className={styles.card__content}>
                {children}
            </div>

            <Link to={`/projeto/${id}`} className={styles.card__button}>
                Ver Detalhes
            </Link>
        </div>
    )
}
import styles from "./Form.module.css";

export default function Form() {
    return (
        <form className={styles.form}>
            <input type="text" name="nome" id="inome" placeholder='Nome' className={styles.form__input}/>
            <input type="email" name="email" id="iemail" placeholder='E-mail' className={styles.form__input}/>
            <textarea name="mensagem" id="imensagem" placeholder='Mensagem' rows="5" className={styles.form__input}>
            </textarea>
            <button type="submit" className={styles.form__button}>ENVIAR MENSAGEM</button>
        </form>
    )
}
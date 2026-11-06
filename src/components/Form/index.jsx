import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("enviando");
        const dados = new FormData(event.target);
        /* 
            new FormData(): coleta os campos do formulário;
            event.target: representa o formulário que foi enviado.
        */

        const formResult = event.target; // guarda o valor antes de qualquer mudança

        try {
            const resposta = await fetch("https://formspree.io/f/xyeevqyl", {
                method: "POST",
                body: dados,
                headers: {
                    Accept: "application/json"
                }
            });
            if (resposta.ok) {
                setStatus("sucesso")
                formResult.reset()
            } else {
                setStatus("erro")
            };
        } catch {
            setStatus("erro");
        }
    }
    return (
        <form 
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <input 
                type="text" 
                name="nome" id="inome" 
                placeholder='Nome' 
                className={styles.form__input} 
                required
            />
            <input 
                type="email" 
                name="email" 
                id="iemail" 
                placeholder='E-mail' 
                className={styles.form__input} 
                required
            />
            <textarea 
                name="mensagem" 
                id="imensagem" 
                placeholder='Mensagem' 
                rows="5" 
                className={styles.form__input} 
                required
            ></textarea>
            <button type="submit" className={styles.form__button} disabled={status === "enviando"}>ENVIAR MENSAGEM</button>
            <div>
                {/*  Renderização condicional com o operador lógico && */}
                {status === "enviando" && <p>Enviando mensagem...</p>}
                {status === "sucesso" && <p>Mensagem enviada!</p>}
                {status === "erro" && <p>Não foi possível enviar. Tente novamente</p>}
                {/* Se a expressão à esquerda de && for verdadeira, o React avalia e renderiza o elemento que está à direita. */}
            </div>
        </form>
    )
}
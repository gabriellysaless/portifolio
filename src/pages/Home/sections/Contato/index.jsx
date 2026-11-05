import styles from './Contato.module.css';

import Section from '../../../../components/Section';
import Form from '../../../../components/Form';
import IconButton from '../../../../components/IconButton/IconButton';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export default function Contato() {
    return(
        <Section id={"contato"} title={"Vamos Conversar?"} variant={"contato"}>
            <p>Entre em contato pelo formulário abaixo ou me contate pelas redes sociais!</p>
            <div className={styles.contato}>
                <Form/>
                <div>
                    <h3>CONTATO:</h3>
                    <div className={styles.contato__redes}>
                    <IconButton icon={<FaLinkedin />} link={"https://www.linkedin.com/in/gabrielly-de-oliveira-sales-almeida-71ab2424a/"}/>
                    <IconButton icon={<FaGithub />} link={"https://github.com/gabriellysaless"}/>
                    </div>
                    <span><IoMdPin /> Ouro Branco, MG</span>
                </div>
            </div>
        </Section>
    )
}
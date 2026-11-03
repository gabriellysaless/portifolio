import styles from "./Header.module.css";
import logoClara from "../../assets/logo-clara-menor.jpg";

export default function Header () {
    return (
        <header className={styles.header}>
            <img src={logoClara} alt="logo" className={styles.header__image}/>
            <nav className={styles.header__nav}>
                <a href="#sobre">Sobre mim</a>
                <a href="#projetos">Projetos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    )
}
import { useState } from "react";
import styles from "./Header.module.css";
import logoClara from "../../assets/logo-clara-menor.jpg";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <img src={logoClara} alt="logo" className={styles.header__image} />

            <button 
                className={styles.header__button} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Nav recebe a classe extra 'header__nav--open' quando menuOpen for true */}
            <nav className={`${styles.header__nav} ${menuOpen ? styles["header__nav--open"] : ""}`}>
                <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
                <a href="#projetos" onClick={closeMenu}>Projetos</a>
                <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
                <a href="#contato" onClick={closeMenu}>Contato</a>
            </nav>
        </header>
    );
}
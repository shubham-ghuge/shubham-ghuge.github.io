import { Github, Instagram, Linkedin, Twitter } from "./icons";
import styles from "../styles/Header.module.css";

function Header() {
    return (
        <header >
            <ul className={styles.header}>
                <li className={styles.icon}>
                    <a href="https://www.twitter.com/_shubham_ghuge_" target="_blank" rel="noreferrer">
                        <Github className="icon" />
                    </a>
                </li>
                <li className={styles.icon}>
                    <a href="https://www.linkedin.com/in/shubham-ghuge" target="_blank" rel="noreferrer">
                        <Linkedin className="icon" />
                    </a>
                </li>
                <li className={styles.icon}>
                    <a href="https://www.instagram.com/shubhamghuge_" target="_blank" rel="noreferrer">
                        <Instagram className="icon" />
                    </a>
                </li>
                <li className={styles.icon}>
                    <a href="https://www.twitter.com/_shubham_ghuge_" target="_blank" rel="noreferrer">
                        <Twitter className="icon" />
                    </a>
                </li>
            </ul>
        </header>
    )
}
export { Header }

import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import styles from "../../styles/Layout.module.css";

function Header() {
    return (
        <header >
            <ul className={styles.header}>
                <li>
                    <a href="https://www.twitter.com/_shubham_ghuge_" target="_blank" rel="noreferrer">
                        <FiTwitter className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shubham-ghuge" target="_blank" rel="noreferrer">
                        <FiLinkedin className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/shubhamghuge_" target="_blank" rel="noreferrer">
                        <FiInstagram className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/shubham-ghuge" target="_blank" rel="noreferrer">
                        <FiGithub className="icon" />
                    </a>
                </li>
            </ul>
        </header>
    )
}
export { Header }

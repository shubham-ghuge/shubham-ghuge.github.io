import Link from "next/link";
import { Code, Mail, Pen, Tool, Zap } from "./icons";
import styles from "../styles/Navbar.module.css";
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li>
                    <Link href="/projects">
                        <a className={styles.menu_items}>
                            Projects
                            <Code className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a className={styles.menu_items}>
                            skills
                            <Zap className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <a className={styles.menu_items} href="https://shubham-ghuge.hashnode.dev" rel="noreferrer" target="_blank">
                        Blogs
                        <Pen className={`${styles.icon} icon`} />
                    </a>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={styles.menu_items}>
                            contact
                            <Mail className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar }

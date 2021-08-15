import Link from "next/link";
import { Code, Home, Mail, Pen, Zap } from "./icons";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/dist/client/router";
function Navbar() {
    const { pathname } = useRouter();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">
                        <a title="Home" className={`${styles.menu_items} ${pathname === "/" ? "active" : ""}`}>
                            <span>
                                Home
                            </span>
                            <Home className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a title="Projects" className={`${styles.menu_items} ${pathname === "/projects" ? "active" : ""}`}>
                            <span>
                                Projects
                            </span>
                            <Code className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a title="Skills" className={`${styles.menu_items} ${pathname === "/skills" ? "active" : ""}`}>
                            <span>
                                skills
                            </span>
                            <Zap className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <a title="Blogs" className={styles.menu_items} href="https://shubham-ghuge.hashnode.dev" rel="noreferrer" target="_blank">
                        <span>
                            Blogs
                        </span>
                        <Pen className={`${styles.icon} icon`} />
                    </a>
                </li>
                <li>
                    <Link href="/contact">
                        <a title="Contact" className={`${styles.menu_items} ${pathname === "/contact" ? "active" : ""}`}>
                            <span>
                                contact
                            </span>
                            <Mail className={`${styles.icon} icon`} />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar }

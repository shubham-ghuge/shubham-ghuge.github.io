import Link from "next/link";
import { FiCode, FiHome, FiMail, FiZap } from "react-icons/fi";
import { BsPen } from "react-icons/bs";
import styles from "../../styles/Layout.module.css";
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
                            <FiHome className={`${styles.icon_nav} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a title="Projects" className={`${styles.menu_items} ${/projects\/*/.test(pathname) ? "active" : ""}`}>
                            <span>
                                Projects
                            </span>
                            <FiCode className={`${styles.icon_nav} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a title="Skills" className={`${styles.menu_items} ${pathname === "/skills" ? "active" : ""}`}>
                            <span>
                                skills
                            </span>
                            <FiZap className={`${styles.icon_nav} icon`} />
                        </a>
                    </Link>
                </li>
                <li>
                    <a title="Blogs" className={styles.menu_items} href="https://shubham-ghuge.hashnode.dev" rel="noreferrer" target="_blank">
                        <span>
                            Blogs
                        </span>
                        <BsPen className={`${styles.icon_nav} icon`} />
                    </a>
                </li>
                <li>
                    <Link href="/contact">
                        <a title="Contact" className={`${styles.menu_items} ${pathname === "/contact" ? "active" : ""}`}>
                            <span>
                                contact
                            </span>
                            <FiMail className={`${styles.icon_nav} icon`} />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar }

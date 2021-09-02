import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./components.module.css";
import { FiCode, FiHome, FiMail, FiZap } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className="flex justify-around">
        <li>
          <NavLink end to="/">
            <FiHome className="icon" />
            <span className={styles.navlink_text}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <FiCode className="icon" />
            <span className={styles.navlink_text}>Projects</span>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills">
            <FiZap className="icon" />
            <span className={styles.navlink_text}>Skills</span>{" "}
          </NavLink>
        </li>
        <li>
          <a
            href="https://shubham-ghuge.hashnode.dev"
            rel="noreferrer"
            target="_blank"
          >
            <BsPen className="icon" />
            <span className={styles.navlink_text}>Blogs</span>{" "}
          </a>
        </li>
        <li>
          <NavLink to="/contact">
            <FiMail className="icon" />
            <span className={styles.navlink_text}>Contact</span>{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./components.module.css";
import { FiCode, FiHome, FiMail, FiZap } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className="flex justify-around md:flex-col md:justify-center">
        <li title="home">
          <NavLink end to="/">
            <FiHome className="icon" aria-label="home icon" />
          </NavLink>
        </li>
        <li title="projects">
          <NavLink to="/projects">
            <FiCode className="icon" aria-label="code icon" />
          </NavLink>
        </li>
        <li title="skills">
          <NavLink to="/skills">
            <FiZap className="icon" />
          </NavLink>
        </li>
        <li title="blogs">
          <a
            href="https://shubham-ghuge.hashnode.dev"
            rel="noreferrer"
            target="_blank"
          >
            <BsPen className="icon" aria-label="pen icon" />
          </a>
        </li>
        <li title="contact">
          <NavLink to="/contact">
            <FiMail className="icon" aria-label="mail icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };

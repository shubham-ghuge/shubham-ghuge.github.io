import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./components.module.css";
import { FiCode, FiHome, FiMail, FiZap } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className="flex justify-around md:flex-col md:justify-center">
        <li>
          <NavLink end to="/">
            <FiHome className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <FiCode className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills">
            <FiZap className="icon" />
          </NavLink>
        </li>
        <li>
          <a
            href="https://shubham-ghuge.hashnode.dev"
            rel="noreferrer"
            target="_blank"
          >
            <BsPen className="icon" />
          </a>
        </li>
        <li>
          <NavLink to="/contact">
            <FiMail className="icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };

import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import styles from "./components.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <ul className="flex justify-end py-2 w-full">
        <li>
          <a
            href="https://www.twitter.com/_shubham_ghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter className="icon" aria-label="twitter icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon" aria-label="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shubhamghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="icon" aria-label="instagram icon" />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://www.github.com/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon" aria-label="github icon" />
          </a>
        </li>
      </ul>
    </header>
  );
}
export { Header };

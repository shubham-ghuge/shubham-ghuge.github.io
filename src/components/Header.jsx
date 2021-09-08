import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import styles from "./components.module.css";
// import { useThemeContext } from "../contexts/themeProvider";
// import { HiSun, HiOutlineSun } from "react-icons/hi";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

function Header() {
  // const { theme, setTheme } = useThemeContext();
  return (
    <header className={styles.header}>
      <ul className="flex justify-end py-2 w-full">
        <li>
          <a
            href="https://www.twitter.com/_shubham_ghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shubhamghuge_"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="icon" />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://www.github.com/shubham-ghuge"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon" />
          </a>
        </li>
        {/* <li>
          <button onClick={() => setTheme((curr) => !curr)}>
            {theme ? (
              <HiOutlineSun className="icon" />
            ) : (
              <HiSun className="icon" />
            )}
          </button>
        </li> */}
      </ul>
    </header>
  );
}
export { Header };

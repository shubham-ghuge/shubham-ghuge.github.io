import React from "react";
import { useNavigate } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import styles from "./home.module.css";

function Home() {
  let navigate = useNavigate();

  return (
    <section className={styles.container}>
      <picture>
        <source srcSet="/final.webp" type="image/webp" />
        <source srcSet="/final.png" type="image/png" />
        <img
          src="/final.png"
          alt="shubham ghuge"
          className="h-72 md:h-96 md:ml-24"
        />
      </picture>
      <div className="text-center flex flex-col items-center justify-center mx-4 md:items-start md:text-left md:w-2/5">
        <h1 className="my-4 text-2xl md:flex flex-col md:mb-8">
          I'm
          <b className="text-white text-3xl ml-2 md:text-7xl md:ml-0">
            Shubham Ghuge.
          </b>
        </h1>
        <p className="mb-4 text-md md:text-xl md:w-4/5 md:mb-8">
          <b>Software developer</b> from India 🇮🇳, Who loves to build elegant
          UI&apos;s.
        </p>
        <button
          aria-label="See My Projects"
          className="btn-primary flex items-center"
          onClick={() => navigate("/projects")}
        >
          <span>See My Projects</span>
          <FiArrowRight className="text-xl ml-2" />
        </button>
      </div>
    </section>
  );
}
export { Home };

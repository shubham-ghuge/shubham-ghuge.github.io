import React from "react";
import { useNavigate } from "react-router";
import profileImg from "../../assets/new.png";
import { FiArrowRight } from "react-icons/fi";
import styles from "./home.module.css";

function Home() {
  let navigate = useNavigate();

  return (
    <section className={styles.container}>
      <img src={profileImg} className="h-72 md:h-96" alt="shubham ghuge" />
      <div className="text-center flex flex-col items-center justify-center mx-4 md:items-start md:text-left md:w-2/5">
        <h1 className="my-4 text-2xl md:flex flex-col md:mb-8">
          I'm
          <b className="text-white text-3xl ml-2 md:text-7xl md:ml-0">Shubham Ghuge.</b>
        </h1>
        <p className="mb-4 text-md md:text-xl md:w-3/5 md:mb-8">
          <b>Software developer</b> from India 🇮🇳, Who loves to build elegant
          UI&apos;s.
        </p>
        <button
          className="btn-primary flex items-center"
          onClick={() => navigate("/contact")}
        >
          <span>Reach out to me</span>
          <FiArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
export { Home };

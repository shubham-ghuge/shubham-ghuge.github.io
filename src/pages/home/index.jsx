import React from "react";
import { useNavigate } from "react-router";
import profileImg from "../../assets/new.png";
import styles from "./home.module.css";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <section className={styles.container}>
        <img
          src={profileImg}
          className="h-72 md:h-96 mt-20"
          alt="shubham ghuge"
        />
        <h1 className="text-2xl mt-4 font-light">
          I am{" "}
          <b className="font-extrabold text-white">
            Shubham Ghuge<span className="text-indigo-600">.</span>
          </b>
        </h1>
        <p className="box-border mx-auto w-11/12  text-center">
          <b>Software developer</b> from India 🇮🇳, Who loves to build
          elegant UI&apos;s.
        </p>
        <button
          className="btn-primary mt-4"
          onClick={() => navigate("/contact")}
        >
          Reach out to me
        </button>
      </section>
    </>
  );
}
export { Home };

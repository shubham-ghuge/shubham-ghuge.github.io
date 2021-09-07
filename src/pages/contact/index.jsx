import React from "react";
import { Title } from "../../components/Title";
import styles from "./contact.module.css";
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div className="container">
      <Title heading="contact" subHeading="I love reading your mails ❤️" />
      <form className="flex flex-col mx-2 justify-center md:w-5/6 md:justify-start mt-16">
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input id="name" placeholder="Tony Stark" type="text" required/>
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" placeholder="tony@avengers.com" required/>
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <input id="message" type="text" placeholder="Share Thoughts" required/>
        </div>
        <button className="btn-primary flex justify-center ai-center mt-4">
          Send <FiSend className="text-xl ml-2" />
        </button>
      </form>
    </div>
  );
}
export { Contact };

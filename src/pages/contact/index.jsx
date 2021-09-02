import React from "react";
import { Title } from "../../components/Title";
import styles from "./contact.module.css";
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div className="sm:w-4/5 sm:mx-auto">
      <Title heading="contact" subHeading="I love reading your mails <3" />
      <form className="flex flex-col justify-center mx-4 h-3/5">
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input id="name" placeholder="Tony Stark" type="text" />
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input id="email" type="text" placeholder="tony@avengers.com" />
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <input id="message" type="text" placeholder="Share Thoughts" />
        </div>
        <button className="btn-primary flex justify-center ai-center mt-4">
          Send <FiSend className="text-xl ml-2" />
        </button>
      </form>
    </div>
  );
}
export { Contact };

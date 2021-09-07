import React from "react";
import { Title } from "../../components/Title";
import styles from "./contact.module.css";
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div className="container">
      <Title heading="contact" subHeading="I love reading your mails ❤️" />
      <form className="flex flex-col w-5/6 justify-start mt-16">
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

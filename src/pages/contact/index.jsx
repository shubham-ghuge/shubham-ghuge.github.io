import React, { useEffect, useState } from "react";
import { Title, Alert } from "../../components";
import styles from "./contact.module.css";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./base";
import { FiMail } from "react-icons/fi";

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  }, [message]);

  async function submitResponse(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        USER_ID
      );
      if (response.status === 200) {
        console.log(response);
        setMessage(
          "Thank you for reaching out to me! I will revert back within a day, Have a good day :)"
        );
      } else {
        setMessage("Something Went Wrong :( please send me a mail!");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      e.target.reset();
      setLoading(false);
    }
  }
  return (
    <div className="container">
      {message && <Alert text={message} />}
      <Title heading="contact" subHeading="I love reading your mails ❤️" />
      <div className="h-full flex flex-col justify-center">
        <form
          className="flex flex-col mt-8 mx-2 justify-center md:w-3/6 md:justify-start md:mx-auto lg:pb-0"
          onSubmit={(evt) => submitResponse(evt)}
        >
          <div className={styles.input_field}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              placeholder="Tony Stark"
              type="text"
              name="name"
              required
            />
          </div>
          <div className={styles.input_field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tony@avengers.com"
              required
            />
          </div>
          <div className={styles.input_field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              style={{ height: "5rem" }}
              placeholder="Share Thoughts"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary flex justify-center items-center ai-center mt-4"
          >
            {isLoading ? (
              "sending..."
            ) : (
              <>
                Send <AiOutlineSend className="text-xl ml-2" />
              </>
            )}
          </button>
        </form>
        <p className="text-center my-2 md:mt-4">OR</p>
        <div className="text-white flex text-md md:text-xl justify-center items-center">
          Drop a
          <FiMail className="mx-2" />
          <a
            href="mailto:shubhamghuge34@gmail.com"
            className="border-dashed border-b-2 dashed border-indigo-600"
          >
            shubhamghuge34@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
export { Contact };

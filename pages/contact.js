import Head from "next/head";
import { FiSend } from "react-icons/fi";
import styles from "../styles/Contact.module.css";
export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main className="container">
                <h1 className="heading text-center">Contact Me</h1>
                <form className={styles.container}>
                    <div className={styles.input}>
                        <input type="text" id="name" required />
                        <label htmlFor="name">Enter Full Name</label>
                    </div>
                    <div className={styles.input}>
                        <input type="email" id="email" required />
                        <label htmlFor="email">Enter Email</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" id="" required />
                        <label htmlFor="name">Message</label>
                    </div>
                    <button>Send<FiSend/></button>
                </form>
            </main>
        </>
    )
}
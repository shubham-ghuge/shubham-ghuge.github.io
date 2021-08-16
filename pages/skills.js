import Head from "next/head";
import styles from "../styles/Skills.module.css";
import { frontEnd } from "../data/skills";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Skills</title>
            </Head>
            <main className="container">
                <h1 className="heading text-center">Skills</h1>
                <div className={styles.skill_container}>
                    {
                        frontEnd.map((i, idx) => {
                            const Icon = i.icon;
                            return (
                                <div className={styles.card} key={idx}>
                                    <Icon className="icon" />
                                    <p>{i.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}
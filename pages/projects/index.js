import data from "./projects.json";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { Card } from "../../components/Card";

export async function getStaticProps() {
    return ({
        props: {
            projectData: data
        }
    })
}

export default function Projects({ projectData }) {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className="container">
                <h1 className="heading extra_margin">Projects</h1>
                <div className="wrapper">
                    <ul className={styles.card_container}>
                        {
                            projectData.map(project => (
                                <li key={project.id} className={styles.card}>
                                    <Card title={project.title} subTitle={project.subTitle} id={project.id} liveLink={project.frontEnd[1].live} logo={project.logo} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>
    )
}
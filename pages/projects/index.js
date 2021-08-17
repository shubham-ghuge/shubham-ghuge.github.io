import data from "../../data/projects";
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

function Projects({ projectData }) {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main className="container text-center">
                <h1 className="heading">Projects</h1>
                <h2 className="sub-heading">Some of the best things, i&apos;ve built so far.</h2>
                <div className={styles.wrapper}>
                    <ul className={styles.card_container}>
                        {projectData.map(project => (
                            <li key={project.id} className={styles.card}>
                                <Card title={project.title} subTitle={project.subTitle} id={project.id} liveLink={project.live} logo={project.logo} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Projects;
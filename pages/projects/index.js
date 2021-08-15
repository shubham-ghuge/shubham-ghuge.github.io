import Link from "next/link";
import data from "./data.json";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import { ExternalLinks, Arrow } from "../../components/icons";

export default function Projects() {
    return (
        <main className="container">
            <h1 className={"heading " + styles.extra_margin}>My Projects</h1>
            <div className={styles.wrapper}>
                <ul className={styles.card_container}>
                    {
                        data.map(project => (
                            <li key={project.id} className={styles.card}>
                                <figure>
                                    <div className={styles.thumbnail}>
                                        <Image src={project.logo} layout="fill" objectFit="cover" alt={project.title} />
                                    </div>
                                    <figcaption>
                                        <div>
                                            <h4>{project.title}</h4>
                                            <p>{project.subTitle}</p>
                                        </div>
                                        <div className={styles.links}>
                                            <Link href={"/projects/" + project.id} passHref>
                                                <a className="arrow">
                                                    Details
                                                    <Arrow className="icon" />
                                                </a>
                                            </Link>
                                            <a href={project.links[0].live}>
                                                Live
                                                <ExternalLinks className="icon" />
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}
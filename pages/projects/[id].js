import Head from "next/head";
import data from "../../data/projects.json";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IoLogoSass } from "react-icons/io5";
import { SiMongodb, SiJavascript, SiTypescript, SiReact, SiReactrouter, SiNodeDotJs, SiRedux, SiHtml5, SiCss3 } from "react-icons/si";

export async function getStaticPaths() {
    const paths = data.map(project => ({ params: { id: project.id.toString() } }))
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const projectData = data.filter(project => project.id.toString() === params.id);
    return {
        props: {
            project: projectData[0]
        }
    }
}
export default function ProjectDetails({ project }) {
    const { title = "", subTitle = "", img = "", logo = "", description = "", techStack = [], frontEnd = "", live = "", backEnd = "" } = project || {};
    const icons = [SiMongodb, SiJavascript, SiReactrouter, SiTypescript, SiReact, SiNodeDotJs, SiRedux, SiHtml5, SiCss3, IoLogoSass];
    return (
        <>

            <main className="container">
                <div className={styles.project_container}>
                    <div className={styles.project_img}>
                        <Image src={img} layout="fill" objectFit="cover" alt={title} />
                    </div>
                    <div className={styles.project_heading}>
                        <div className={styles.project_details}>
                            <Link href={live} passHref>
                                <a target="_blank">
                                    <h2 className="heading">{title}</h2>
                                    <BiLinkExternal className="icon" />
                                </a>
                            </Link>
                            <h3>{subTitle}</h3>
                        </div>
                        <div className={styles.project_logo}>
                            <Image src={logo} layout="fill" objectFit="cover" alt={title + "logo"} />
                        </div>
                    </div>
                    <div className={styles.tech_stack}>
                        <h4>Tech Stack</h4>
                        <div>
                            {techStack.map((tech, idx) => {
                                const Icon = icons.find(i => i.name === tech)
                                return (<Icon key={idx} className="icon" />)
                            })}
                        </div>
                    </div>
                    <p>{description}</p>
                    <div className={styles.project_links}>
                        <h4>Source Code</h4>
                        <div>
                            <Link href={frontEnd} passHref>
                                <a target="_blank">
                                    <span>Front End</span>
                                    <FiGithub className="icon" />
                                </a>
                            </Link>
                            {backEnd && (<Link href={backEnd}>
                                <a target="_blank">
                                    <span>Back End</span>
                                    <FiGithub className="icon" />
                                </a>
                            </Link>)}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}
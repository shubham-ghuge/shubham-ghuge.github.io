import Head from "next/head";
import data from "./projects.json";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import Link from "next/link";
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
    const { title, subTitle, img, logo, description, techStack, frontEnd, backEnd } = project || { backEnd: [] };
    const icons = [SiMongodb, SiJavascript, SiReactrouter, SiTypescript, SiReact, SiNodeDotJs, SiRedux, SiHtml5, SiCss3, IoLogoSass];

    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <main className="container">
                <div className={styles.project_container}>
                    <div className={styles.project_img}>
                        <Image src={img} layout="fill" objectFit="cover" alt={title} />
                    </div>
                    <div className={styles.project_heading}>
                        <div className={styles.project_details}>
                            <h2 className="heading">{title}</h2>
                            <h3>{subTitle}</h3>
                        </div>
                        <div className={styles.project_logo}>
                            <Image src={logo} layout="fill" objectFit="cover" alt={title + "logo"} />
                        </div>
                    </div>
                    <div className={styles.tech_stack}>
                        <h4>Tech Stack</h4>
                        <div>
                            {
                                techStack.map((tech, idx) => {
                                    const Icon = icons.find(i => i.name === tech)
                                    return (<Icon key={idx} className="icon" />)
                                })
                            }
                        </div>
                    </div>
                    <p>{description}</p>
                    <div style={{ display: "flex", marginTop: ".5rem" }}>
                        {/* {
                            frontEnd.map((i, idx) => (<Link href={i.live} key={idx} passHref>
                                <a>
                                    <div className={styles.project_tech} >
                                        <Image layout="fill" objectFit="cover" src={`/skills/${i.icon}.svg`} alt="icon" />
                                    </div>
                                </a>
                            </Link>))
                        } */}
                    </div>
                </div>
            </main>
        </>
    )

}
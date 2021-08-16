import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Arrow } from "../icon";
import styles from "../../styles/Projects.module.css";


function Card({ id, title, subTitle, liveLink, logo }) {
    return (
        <figure>
            <div className={styles.thumbnail}>
                <Image src={logo} layout="fill" objectFit="cover" alt={title} />
            </div>
            <figcaption>
                <div>
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                </div>
                <div className={styles.links}>
                    <Link href={"/projects/" + id} passHref>
                        <a className="arrow">
                            Details
                            <Arrow className="icon" />
                        </a>
                    </Link>
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        Live
                        <BiLinkExternal className="icon" />
                    </a>
                </div>
            </figcaption>
        </figure>
    )
}
export { Card };
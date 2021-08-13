import Link from "next/link";
import data from "./data.json";

export default function Projects() {
    return (
        <>
            <h2>Projects Page</h2>
            <ul>
                {
                    data.map(project => (
                        <li key={project.id}>
                            <Link href={"/projects/" + project.id}>{project.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
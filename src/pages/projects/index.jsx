import React from "react";
import { Title } from "../../components/Title";
import projectData from "../../data/projects.json";
import { Card } from "./components";

function Projects() {
  return (
    <section className="container">
      <Title
        heading="projects"
        subHeading="Some of the best things, I've built so far 🚀"
      />
      <div className="mt-14 md:mt-6">
        <ul className="flex overflow-scroll md:flex-wrap md:justify-start md:overflow-hidden">
          {projectData.map((project) => (
            <li key={project.id}>
              <Card details={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export { Projects };

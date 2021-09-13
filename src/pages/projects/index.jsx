import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import projectData from "../../data/projects.js";
import { Card } from "./components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Details } from "./Details";
import { IoClose } from "react-icons/io5";

function Projects() {
  const [selected, setSelected] = useState(null);
  const [showData, setProjectData] = useState({});
  useEffect(() => {
    if (selected) {
      const [currentProjectData] = projectData.filter((i) => i.id === selected);
      setProjectData(currentProjectData);
    }
    return () => setProjectData({});
  }, [selected]);

  function closeDetails() {
    setSelected(null);
  }

  return (
    <section className="container">
      <Title
        heading="projects"
        subHeading="Some of the best things, I've built so far 🚀"
      />
      <div className="h-full flex items-center md:mt-6">
        <AnimateSharedLayout type="crossfade">
          <ul className="flex overflow-scroll md:pl-4 md:flex-wrap md:justify-start md:overflow-hidden">
            {projectData.map((project) => (
              <li key={project.id}>
                <Card
                  details={project}
                  setFuntion={setSelected}
                  layoutId={project.id}
                />
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {selected && (
              <motion.div
                layoutId={selected}
                className="z-10 fixed px-2 inset-0 top-0 bottom-0 flex flex-col justify-center items-center"
                onKeyDown={closeDetails}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-indigo-900 bg-opacity-80 absolute top-0 inset-0"
                ></motion.div>
                <motion.div className="relative z-1 bg-gray-900 rounded-lg pb-4 md:h-5/6 md:w-11/12">
                  <button
                    className="ml-auto block my-4 mr-4 p-2 bg-gray-800 text-gray-50 rounded"
                    aria-label="close modal"
                    onClick={closeDetails}
                  >
                    <IoClose aria-label="close icon" />
                  </button>
                  <Details data={showData} tabIndex="0" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </section>
  );
}
export { Projects };

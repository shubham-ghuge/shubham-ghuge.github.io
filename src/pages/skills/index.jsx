import React, { useState } from "react";
import { Title } from "../../components/Title";
import { data } from "../../data/skills";
import styles from "./skills.module.css";
import { motion } from "framer-motion";

function Skills() {
  const [tech, setTech] = useState(0);
  const [skillData, setSkillData] = useState(Object.values(data)[tech]);

  function showSkillIcons(idx) {
    setTech(idx);
    setSkillData(Object.values(data)[idx]);
  }

  return (
    <section className="container">
      <Title heading="Skills" subHeading="Tech I've work with till now ✨" />
      <div className="my-2 mx-4 md:my-4 md:mx-0">
        {Object.keys(data).map((j, idx) => (
          <button
            className={`capitalize text-gray-50 text-xs rounded m-2 p-2 ring-2 ring-indigo-600 md:text-lg ${
              tech === idx ? "bg-indigo-600 text-white font-semibold" : ""
            }`}
            onClick={() => showSkillIcons(idx)}
            key={idx}
            tabIndex="0"
          >
            {j.split("_").join(" ")}
          </button>
        ))}
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        className={styles.container}
      >
        {skillData &&
          skillData.map((i, idx) => {
            const Icon = i.icon;
            return (
              <motion.div
                tabIndex="0"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    y: 0,
                    scale: 1,
                  },
                  hidden: {
                    y: 50,
                    scale: 0,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
                key={idx}
                className={styles.card}
              >
                <Icon
                  className="text-2xl text-indigo-600 md:text-3xl"
                  aria-label={`${i.name} icon`}
                />
                <p className="text-xs mt-2 capitalize font-normal text-gray-100 md:text-sm">
                  {i.name}
                </p>
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
}
export { Skills };

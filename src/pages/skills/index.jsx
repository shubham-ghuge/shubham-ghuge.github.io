import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { data } from "../../data/skills";
import styles from "./skills.module.css";
import { motion } from "framer-motion";

function Skills() {
  const [tech, setTech] = useState(0);
  const [skillData, setSkillData] = useState(Object.values(data)[tech]);

  useEffect(() => {
    if (window.innerWidth > 600) {
      const allDetails = Object.values(data).reduce(
        (acc, i) => (acc = [...acc, ...i]),
        []
      );
      setTech(null);
      setSkillData(allDetails);
    } else {
      setSkillData(Object.values(data)[0]);
    }
    return () => setSkillData([]);
  }, []);

  function showSkillIcons(idx) {
    setTech(idx);
    setSkillData(Object.values(data)[idx]);
  }

  return (
    <section className="container">
      <Title heading="Skills" subHeading="Tech I've work with till now ✨," />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        className="mx-auto my-4"
      >
        {Object.keys(data).map((j, idx) => (
          <button
            className={`capitalize focus:outline-none text-gray-50 text-xs rounded m-2 p-2 ring-2 ring-indigo-600 md:text-lg ${
              tech === idx ? "bg-indigo-600 text-white font-semibold" : ""
            }`}
            onClick={() => showSkillIcons(idx)}
            key={idx}
          >
            {j.split("_").join(" ")}
          </button>
        ))}
        <div className="flex mt-4 flex-wrap md:mt-8">
          {skillData &&
            skillData.map((i, idx) => {
              const Icon = i.icon;
              return (
                <motion.div
                  variants={{
                    hidden: { scale: 0 },
                    show: { scale: 1 },
                  }}
                  key={idx}
                  className={styles.card}
                >
                  <Icon className="text-2xl text-indigo-600 md:text-3xl" />
                  <p className="text-xs mt-2 capitalize font-normal text-gray-100 md:text-sm">
                    {i.name}
                  </p>
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
export { Skills };

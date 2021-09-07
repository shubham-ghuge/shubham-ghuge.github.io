import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { data } from "../../data/skills";
import styles from "./skills.module.css";

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
      <div className="mx-auto">
        {Object.keys(data).map((j, idx) => (
          <button
            className={`capitalize focus:outline-none rounded m-2 p-2 ring-2 ring-indigo-600 ${
              tech === idx ? "bg-indigo-600 text-white" : ""
            }`}
            onClick={() => showSkillIcons(idx)}
            key={idx}
          >
            {j.split("_").join(" ")}
          </button>
        ))}
        <div className="flex mt-8 flex-wrap">
          {skillData &&
            skillData.map((i, idx) => {
              const Icon = i.icon;
              return (
                <div key={idx} className={styles.card}>
                  <Icon className="text-2xl text-cyan-500 md:text-3xl" />
                  <p className="text-sm mt-2 capitalize text-white">
                    {i.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
export { Skills };

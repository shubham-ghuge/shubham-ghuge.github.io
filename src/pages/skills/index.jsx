import React, { useState } from "react";
import { Title } from "../../components/Title";
import { data } from "../../data/skills";

function Skills() {
  const [tech, setTech] = useState(0);

  return (
    <section className="container">
      <Title heading="Skills" subHeading="Tech I've work with till now," />
      {Object.keys(data).map((j, idx) => (
        <button
          className={`capitalize focus:outline-none rounded m-2 p-2 ring-2 ring-indigo-600 ${
            tech === idx ? "bg-indigo-600 text-white" : ""
          }`}
          onClick={() => setTech(idx)}
          key={idx}
        >
          {j.split("_").join(" ")}
        </button>
      ))}
      <div className="flex flex-wrap justify-center">
        {Object.values(data)[tech].map((i) => {
          const Icon = i.icon;
          return (
            <div className="m-2 p-2 box-border h-20 w-20 flex items-center flex-col justify-center ring-2 text-indigo-600 ring-gray-800">
              <Icon className="text-3xl" />
              <p className="text-sm font-semibold mt-2 capitalize text-gray-50">
                {i.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export { Skills };

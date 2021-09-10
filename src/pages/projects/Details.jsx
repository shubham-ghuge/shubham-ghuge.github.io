import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

function Details({ data }) {
  const {
    title,
    subTitle,
    img,
    logo,
    description,
    techStack = [],
    frontEnd,
    live,
    backEnd,
  } = data ?? { techStack: [] };

  return (
    <section className="mx-4 md:p-4">
      <a href={live} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-between md:mb-4">
          <h2 className="flex flex-col text-2xl text-white font-bold">
            {title}
            <span className="text-sm font-semibold text-indigo-400">
              {subTitle}
              <BiLinkExternal className="inline-block ml-2 text-white text-xl" />
            </span>
          </h2>
          <img src={logo} className="h-12" alt={title + " " + logo} />
        </div>
      </a>
      <div className="md:flex">
        <img
          src={img}
          alt={title}
          className="h-56 object-cover rounded-lg my-4 md:h-80 md:max-w-lg"
        />
        <div className="md:px-4 mt-4">
          <h3 className="text-xs font-semibold text-white md:text-2xl">
            Tech Stack
          </h3>
          <div className="flex mt-1 mb-3 md:mt-3">
            {techStack.map((Tech, idx) => {
              return (
                <Tech
                  key={idx}
                  className="text-indigo-500 text-2xl mr-2 md:text-4xl"
                />
              );
            })}
          </div>
          <h3 className="text-xs font-semibold text-white md:text-2xl">
            About {title}
          </h3>
          <p className="text-sm my-1 mb-3 md:text-xl">{description}</p>
          <h3 className="text-xs font-semibold text-white md:text-2xl">
            Source Code
          </h3>
          <div className="flex text-sm mb-1 md:text-lg">
            <a
              href={frontEnd}
              target="_blank"
              className="flex items-center"
              rel="noopener noreferrer"
            >
              <span>Front End</span>
              <FiGithub className="text-indigo-500 text-md ml-2" />
            </a>
            {backEnd && (
              <a
                href={backEnd}
                target="_blank"
                className="flex ml-4 items-center"
                rel="noopener noreferrer"
              >
                <span>Back End</span>
                <FiGithub className="text-indigo-500 text-md ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Details };

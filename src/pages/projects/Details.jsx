import React from "react";
import { useLocation } from "react-router";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IoLogoSass } from "react-icons/io5";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiNodeDotJs,
  SiRedux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Details() {
  const { state } = useLocation();
  const icons = [
    SiMongodb,
    SiJavascript,
    SiReactrouter,
    SiTypescript,
    SiReact,
    SiNodeDotJs,
    SiRedux,
    SiHtml5,
    SiCss3,
    IoLogoSass,
  ];

  if (!state?.details) {
    return (
      <h2 className="text-center text-white text-2xl mt-16">
        Project Data Not Found
      </h2>
    );
  }

  const {
    title,
    subTitle,
    img,
    logo,
    description,
    techStack,
    frontEnd,
    live,
    backEnd,
  } = state.details ?? {};

  return (
    <section className="mx-4 mt-4">
      <a href={live} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-between">
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
      <img src={img} alt={title} className="h-56  object-cover rounded-lg my-4" />
      <h3 className="text-xs font-semibold text-white">Tech Stack</h3>
      <div className="flex mt-1 mb-3">
        {techStack.map((tech, idx) => {
          const Icon = icons.find((i) => i.name === tech);
          return <Icon key={idx} className="text-indigo-500 text-2xl mr-2" />;
        })}
      </div>
      <h3 className="text-xs font-semibold text-white">About {title}</h3>
      <p className="text-sm my-1 mb-3">{description}</p>
      <h3 className="text-xs font-semibold text-white">Source Code</h3>
      <div className="flex text-sm mb-1">
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
    </section>
  );
}
export { Details };

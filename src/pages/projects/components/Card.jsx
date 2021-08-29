import React from "react";
import { BiLinkExternal, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card({ id, title, subTitle, liveLink, logo }) {
  return (
    <figure className="w-72 border-4 border-indigo-400 border-opacity-50 rounded-lg px-6 py-8 box-border mx-4 flex flex-col">
      <img src={logo} className="h-24 mx-auto mb-4" alt={title} />
      <figcaption className="flex flex-col items-center">
        <h3 className="text-2xl text-white font-semibold">{title}</h3>
        <p className="text-lg font-medium text-indigo-600">{subTitle}</p>
        <div className="flex">
          <Link to={"/projects/" + id} className="flex items-center">
            Details
            <BiRightArrowAlt className="icon" />
          </Link>
          <a
            href={liveLink}
            className="flex items-center ml-5"
            target="_blank"
            rel="noreferrer"
          >
            Live
            <BiLinkExternal className="icon" />
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
export { Card };

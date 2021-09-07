import React from "react";
import { BiLinkExternal, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card({ details }) {
  const { id, title, subTitle, live, logo } = details;
  return (
    <figure className="w-72 sm:w-64 flex flex-col px-6 py-8 sm:px-4 sm:py-10 mx-4 sm:m-4 border-4 border-indigo-400 border-opacity-50 rounded-lg box-border">
      <img src={logo} className="h-24 mx-auto mb-4 sm:h-12" alt={title} />
      <figcaption className="flex flex-col items-center">
        <h3 className="text-lg text-white font-semibold">{title}</h3>
        <p className="text-md font-medium text-indigo-600">{subTitle}</p>
        {/* <div className="flex">
          <Link
            to={"/projects/" + id}
            className="flex items-center"
            state={{ details }}
          >
            Details
            <BiRightArrowAlt className="icon" />
          </Link>
          <a
            href={live}
            className="flex items-center ml-5"
            target="_blank"
            rel="noreferrer"
          >
            Live
            <BiLinkExternal className="icon" />
          </a>
        </div> */}
      </figcaption>
    </figure>
  );
}
export { Card };

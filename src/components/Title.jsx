import React from "react";

function Title({ heading, subHeading }) {
  return (
    <div>
      <h1 className="flex text-2xl pt-12 capitalize text-white font-bold items-center md:mt-0">
        <span className="flex ml-2 mr-3 relative items-center justify-center h-4 w-4">
          <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-indigo-400 opacity-75"></span>
          <span className=" inline-block rounded-full h-3 w-3 bg-indigo-600"></span>
        </span>
        {heading}
      </h1>
      <h2 className="ml-8 md:mb-8 text-lg font-medium">
        {subHeading}
      </h2>
    </div>
  );
}
export { Title };

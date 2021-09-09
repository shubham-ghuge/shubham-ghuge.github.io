import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="text-white h-screen flex flex-col justify-center items-center">
      <BiError className="text-5xl"/>
      <h2 className="text-2xl my-2">Page Not Found</h2>
      <Link to="/" className="border-b-2 border-dashed border-indigo-600 pb-1">
        Back to Home
      </Link>
    </section>
  );
}
export { Error };

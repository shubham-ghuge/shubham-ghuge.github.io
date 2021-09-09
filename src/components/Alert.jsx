import React from "react";
import { motion } from "framer-motion";

function Alert({ text }) {
  return (
    <motion.div
      className={`bg-green-600 rounded bg-opacity-50 text-white fixed top-36 right-1 md:right-5 md:top-16 p-4 flex justify-center items-center`}
      animate={{ x: -50 }}
      transition={{ type: "spring", bounce: 0.8 }}
    >
      <p>{text}</p>
    </motion.div>
  );
}
export { Alert };

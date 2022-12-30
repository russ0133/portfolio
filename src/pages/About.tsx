import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className=" bg-black h-[80vh] w-[60vw]">
      <motion.div
        layout
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={spring}
        className="relative bg-gradient-to-br  from-purple-600 to-red-800 shadow-md rounded-full text-white"
      >
        <h1 className="text-2xl font-opensans font-bold m-2 mx-6">Who am I?</h1>
      </motion.div>

      <motion.div
        className="relative "
        transition={spring2}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
      >
        <h1 className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis inventore,
          doloremque ut aliquid ipsam natus delectus enim dicta dolores!
        </h1>
      </motion.div>
    </motion.div>
  );
}
const spring = { type: "spring", stiffness: 700, damping: 30, delay: 0.2 };
const spring2 = { type: "spring", stiffness: 700, damping: 30, delay: 0.5 };

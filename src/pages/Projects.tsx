/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div className="mx-12 max-w-xs">
      <motion.div
        layout
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={spring}
        className="relative bg-gradient-to-br  from-purple-600 to-red-800 shadow-md rounded-full text-white"
      >
        <h1 className="text-2xl font-opensans font-bold m-2 mx-6">My projects</h1>
      </motion.div>

      <motion.div
        className="relative "
        transition={spring2}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis inventore,
          doloremque ut aliquid ipsam natus delectus enim dicta dolores!
        </p>
      </motion.div>
    </motion.div>
  );
}
const spring = { type: "spring", stiffness: 300, damping: 30, delay: 0.2 };
const spring2 = { type: "spring", stiffness: 200, damping: 30, delay: 0.5 };

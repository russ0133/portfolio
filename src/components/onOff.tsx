import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useZuStore } from "../zustand/zuStore";

function TogglePower() {
  const power = useZuStore((store) => store.state.power);
  const togglePower = useZuStore((store) => store.actions.togglePower);

  const svgColor = power ? "green" : "grey";
  return (
    <motion.div
      layout
      transition={spring}
      initial="closed"
      animate={power ? "open" : "closed"}
      variants={{
        open: {
          backgroundColor: "rgb(22 163 74)",
        },
        closed: {
          backgroundColor: "rgb(156 163 175)",
        },
      }}
      className="switch bg-gray-400 rounded-full shadow-md shadow-white/"
      data-isOn={power}
      onClick={() => togglePower()}
    >
      <motion.div className="handle" layout transition={spring}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={svgColor}
          className="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
const spring = { type: "spring", stiffness: 700, damping: 30 };

export default TogglePower;
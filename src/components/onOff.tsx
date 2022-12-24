import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { zuStore } from "../zustand/zuStore";

function TogglePower() {
  const power = zuStore((store) => store.state.power);
  const togglePower = zuStore((store) => store.actions.togglePower);

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
          backgroundColor: "rgb(220 38 38)",
        },
      }}
      className="switch bg-red-600 rounded-full"
      data-isOn={power}
      onClick={() => togglePower()}
    >
      <motion.div className="handle" layout transition={spring}></motion.div>
    </motion.div>
  );
}
const spring = { type: "spring", stiffness: 700, damping: 30 };

export default TogglePower;

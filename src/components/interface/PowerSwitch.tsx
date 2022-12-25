import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useZuStore } from "../../zustand/zuStore";
import PowerIcon from "./svg/PowerIcon";

function PowerSwitch() {
  const power = useZuStore((store) => store.state.console.isPowerOn);
  const { togglePower, setIsFirstRun, setUIOpen } = useZuStore((store) => store.actions);

  const handleClick = () => {
    if (power === true) {
      setIsFirstRun(true);
      setUIOpen(true);
    }
    togglePower();
  };

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
      className="switch bg-gray-400 rounded-full shadow-md "
      data-on={power}
      onClick={handleClick}
    >
      <motion.div className="handle" layout transition={spring}>
        <PowerIcon />
      </motion.div>
    </motion.div>
  );
}
const spring = { type: "spring", stiffness: 700, damping: 30 };

export default PowerSwitch;

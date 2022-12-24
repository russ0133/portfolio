import React from "react";
import TogglePower from "./onOff";
import { motion } from "framer-motion";

function Navbar() {
  const paragraphs = [
    {
      text: "Welcome!",
      classes:
        "text-slate-100 font-bold text-2xl bg-gradient-to-br shadow-md  from-purple-500 to-purple-700   w-max px-2 rounded-md",
    },
    { text: "This is my portifolio.", classes: "text-white" },
    { text: "Navigate through the options clicking on buttons.", classes: "text-white" },
  ];
  return (
    <div id="navbar" onClick={() => console.log("eee")}>
      <TogglePower />
      <div className="mt-4 ml-4 bg-purple-500/50 p-2 backdrop-blur-sm rounded-md ">
        {paragraphs.map((paragraph, idx) => (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 * idx }}
            className={`${idx == 0 ? "title " : "paragraph "} ${paragraph.classes} `}
          >
            {paragraph.text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

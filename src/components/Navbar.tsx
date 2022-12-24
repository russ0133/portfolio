import React from "react";
import TogglePower from "./onOff";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Spinner from "./svg/Spinner";
import { useZuStore } from "../zustand/zuStore";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const modelLoaded = useZuStore((store) => store.state.modelLoaded);

  useEffect(() => {
    if (modelLoaded)
      setTimeout(() => {
        setLoaded(true);
        setOpen(true);
      }, 500);
  }, [modelLoaded]);

  const paragraphs = [
    { text: "This is my portifolio.", classes: "text-white" },
    { text: "Navigate through the options clicking on buttons.", classes: "text-white" },
  ];
  return (
    <div id="navbar" onClick={() => console.log("eee")}>
      <TogglePower />
      <motion.div
        transition={spring}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            width: 400,
          },
          closed: {
            width: 58,
          },
        }}
        className={`mt-4 ml-4 ${open && "bg-purple-500/50 backdrop-blur-sm"} p-2 rounded-md `}
      >
        <div className={`title ${open && "flex"}`}>
          {open && (
            <div className=" text-slate-100 font-bold text-2xl bg-gradient-to-br  from-purple-500 to-purple-700 shadow-md w-max px-2 rounded-md">
              Welcome!
            </div>
          )}
          <div
            onClick={() => setOpen(!open)}
            className={`
            ${
              open ? "bg-purple-100 " : "bg-gradient-to-br  from-purple-500 to-purple-700"
            } rounded-full px-1 closeButton cursor-pointer shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center justify-center`}
          >
            {open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox={open ? "0 0 24 24" : "0 0 24 24"}
                strokeWidth={1.5}
                stroke={"black"}
                className={"w-6 h-6 "}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            {!loaded && <Spinner />}
            {!open && loaded && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-8 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            )}
          </div>
        </div>
        {open &&
          paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 * idx }}
              className={`${"paragraph "} ${paragraph.classes} `}
            >
              {paragraph.text}
            </motion.p>
          ))}
      </motion.div>
    </div>
  );
}

export default Navbar;

const spring = { type: "spring", stiffness: 700, damping: 30 };

import React from "react";
import PowerSwitch from "./interface/PowerSwitch";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Spinner from "./interface/svg/Spinner";
import { useZuStore } from "../zustand/zuStore";
import Information from "./interface/Information";

function Navbar() {
  const [loaded, setLoaded] = React.useState(false);

  const open = useZuStore((store) => store.state.isUIOpen);
  const setOpen = useZuStore((store) => store.actions.setUIOpen);
  const modelLoaded = useZuStore((store) => store.state.console.isModelLoaded);

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
      <section className="navbar-upper">
        <PowerSwitch />
        <a
          href="https://docs.google.com/document/d/1r_PT2d2jp-1QEXLX3GCt915DiBOcFc_kkxL5IjIUZv0/export?format=pdf"
          className="resume text-white animate-bounce transition ease-in-out bg-gradient-to-br  from-red-500 to-purple-700 hover:from-red-600 hover:to-purple-800 hover:-translate-y-1 "
        >
          Get my CV
        </a>
        <button className="contact text-white  transition ease-in-out bg-gradient-to-br  from-red-500 to-purple-700 hover:from-red-500 hover:to-purple-800 hover:-translate-y-1 ">
          Contact me
        </button>
      </section>
      <Information />
    </div>
  );
}

export default Navbar;

const spring = { type: "spring", stiffness: 700, damping: 30 };

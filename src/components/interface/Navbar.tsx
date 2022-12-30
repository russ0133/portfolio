import React, { useEffect } from "react";

import { useZuStore } from "@zustand/store";
import { Information } from "@components/interface";
import { PowerSwitch } from "@components/console";

function Navbar() {
  const setOpen = useZuStore((store) => store.actions.setUIOpen);
  const modelLoaded = useZuStore((store) => store.state.console.isModelLoaded);

  useEffect(() => {
    if (modelLoaded)
      setTimeout(() => {
        setOpen(true);
      }, 500);
  }, [modelLoaded]);

  return (
    <div id="navbar">
      <section className="navbar-upper">
        <PowerSwitch />
        <a
          href="https://docs.google.com/document/d/1r_PT2d2jp-1QEXLX3GCt915DiBOcFc_kkxL5IjIUZv0/export?format=pdf"
          className="resume text-white animate-bounce noselect transition ease-in-out bg-gradient-to-br  from-red-500 to-purple-700 hover:from-red-600 hover:to-purple-800 hover:-translate-y-1 "
        >
          Get my CV
        </a>
        <a
          href="mailto:gabrieldsfs@gmail.com"
          className="contact text-white noselect transition ease-in-out bg-gradient-to-br  from-red-500 to-purple-700 hover:from-red-500 hover:to-purple-800 hover:-translate-y-1 "
        >
          Contact me
        </a>
      </section>
      <Information />
    </div>
  );
}

export default Navbar;

const spring = { type: "spring", stiffness: 700, damping: 30 };

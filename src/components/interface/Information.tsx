import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useZuStore } from "../../zustand/zuStore";
import Spinner from "./svg/Spinner";
import CloseIcon from "./svg/CloseIcon";
import InfoIcon from "./svg/InfoIcon";

const Information = () => {
  const [loaded, setLoaded] = React.useState(false);

  const isUIOpen = useZuStore((store) => store.state.isUIOpen);
  const setUIOpen = useZuStore((store) => store.actions.setUIOpen);
  const modelLoaded = useZuStore((store) => store.state.console.isModelLoaded);

  useEffect(() => {
    if (modelLoaded)
      setTimeout(() => {
        setLoaded(true);
        setUIOpen(true);
      }, 500);
  }, [modelLoaded]);

  const paragraphs = [
    { text: "This is my portifolio.", classes: "text-white" },
    { text: "Navigate through the options clicking on buttons.", classes: "text-white" },
  ];
  return (
    <div>
      <motion.div
        transition={spring}
        initial="closed"
        animate={isUIOpen ? "open" : "closed"}
        variants={{
          open: {
            width: 400,
          },
          closed: {
            width: 58,
          },
        }}
        className={`mt-4 ml-4 ${isUIOpen && "bg-purple-500/50 backdrop-blur-sm"} p-2 rounded-md `}
      >
        <div className={`title ${isUIOpen && "flex"}`}>
          {isUIOpen && (
            <div className=" text-slate-100 noselect font-bold text-2xl bg-gradient-to-br  from-purple-500 to-purple-700 shadow-md w-max px-2 rounded-md">
              Welcome!
            </div>
          )}
          <div
            onClick={() => setUIOpen(!isUIOpen)}
            className={`
              ${
                isUIOpen ? "bg-purple-100 " : "bg-gradient-to-br  from-purple-500 to-purple-700"
              } rounded-full px-1 closeButton cursor-pointer shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center justify-center`}
          >
            {isUIOpen && <CloseIcon />}
            {!isUIOpen && loaded && <InfoIcon />}
          </div>
        </div>
        {isUIOpen &&
          paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 * idx }}
              className={`${"paragraph noselect "} ${paragraph.classes} `}
            >
              {paragraph.text}
            </motion.p>
          ))}
      </motion.div>
    </div>
  );
};

const spring = { type: "spring", stiffness: 700, damping: 30 };

export default Information;

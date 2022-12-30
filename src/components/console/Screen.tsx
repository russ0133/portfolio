import React from "react";
import { motion } from "framer-motion-3d";
import { useZuStore } from "../../zustand/store";
import { GLTFResult } from "../Console";
import { Html } from "@react-three/drei";
import { ConsoleScreenMenu } from "../../App";

interface IScreen {
  nodes: GLTFResult["nodes"];
  materials: GLTFResult["materials"];
}

const Screen: React.FC<IScreen> = ({ nodes, materials }) => {
  const { isFirstRun, isPowerOn, selectedOption } = useZuStore((store) => store.state.console);

  const { setIsFirstRun, setUIOpen, setIsViewingContent } = useZuStore((store) => store.actions);
  return (
    <motion.mesh
      initial={!isFirstRun ? "on" : "off"}
      animate={isPowerOn ? "on" : "off"}
      variants={{
        off: { scaleX: 0 },
        on: { scaleX: 1 },
      }}
      geometry={nodes.Cube004_1.geometry}
      material={isPowerOn ? materials.Screen : materials.Border}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
    >
      {isPowerOn ? (
        <Html
          className="content"
          position={[-0.004, 1.18, 0.16]}
          scale={[0.5, 0.5, 1]}
          transform
          occlude
        >
          <motion.div
            initial={!isFirstRun ? "on" : "off"}
            animate={isPowerOn ? "on" : "off"}
            variants={{
              off: { scaleX: 0, opacity: 0 },
              on: {
                scaleX: 1,
                opacity: 1,
                fontSize: 2,
              },
            }}
            transition={{ delay: 0.4 }}
            className={"wrapper font-gameover"}
            onPointerDown={(e) => {
              setIsViewingContent(true);
              setUIOpen(false);
              setIsFirstRun(false);
              e.stopPropagation();
            }}
          >
            <div className="test bg-gradient-to-br  from-gray-300 to-gray-400 w-full h-[3px] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                />
              </svg>
            </div>
            <p className="mb-2 noselect">{ConsoleScreenMenu[selectedOption].label}</p>
          </motion.div>
        </Html>
      ) : null}
    </motion.mesh>
  );
};

export default Screen;

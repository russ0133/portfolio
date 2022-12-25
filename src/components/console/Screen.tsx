import React from "react";
import { motion } from "framer-motion-3d";
import { useZuStore } from "../../zustand/zuStore";
import { GLTFResult } from "../Console";
import { Html } from "@react-three/drei";

interface IScreen {
  nodes: GLTFResult["nodes"];
  materials: GLTFResult["materials"];
}

const Screen: React.FC<IScreen> = ({ nodes, materials }) => {
  const { isFirstRun, isPowerOn } = useZuStore((store) => store.state.console);
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
            className={"wrapper"}
            onPointerDown={(e) => {
              setIsViewingContent(true);
              setUIOpen(false);
              setIsFirstRun(false);
              e.stopPropagation();
            }}
          >
            <p>Hello</p>
          </motion.div>
        </Html>
      ) : null}
    </motion.mesh>
  );
};

export default Screen;

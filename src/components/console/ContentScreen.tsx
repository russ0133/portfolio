import React from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

import { useZuStore } from "@zustand/store";
import { GLTFResult } from "@components/Model";
import { ConsoleScreenMenu } from "@App";

interface IScreen {
  nodes: GLTFResult["nodes"];
  materials: GLTFResult["materials"];
}

const ContentScreen: React.FC<IScreen> = ({ nodes, materials }) => {
  const { isViewingContent, selectedOption } = useZuStore((store) => store.state.console);
  const { setIsViewingContent } = useZuStore((store) => store.actions);

  return (
    <motion.mesh
      key="hello"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      geometry={nodes.Cube004_1.geometry}
      position={[0.05, -0.22, 0]}
    >
      {isViewingContent ? (
        <Html position={[-0.005, 1.18, 1]} scale={[1.5, 1.5, 1]} transform occlude>
          <motion.div
            initial="off"
            animate={isViewingContent ? "on" : "off"}
            variants={{
              off: {},
              on: {
                opacity: 1,
              },
            }}
            className="wrapper-screen bg-gradient-to-br  from-purple-500 to-red-700"
            transition={{}}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            {ConsoleScreenMenu[selectedOption].content}
          </motion.div>
        </Html>
      ) : null}
    </motion.mesh>
  );
};

export default ContentScreen;

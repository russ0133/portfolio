import React from "react";
import { motion } from "framer-motion-3d";
import { useZuStore } from "../../zustand/zuStore";
import { GLTFResult } from "../Console";
import { Html } from "@react-three/drei";
import Example from "../interface/AboutMe";
import About from "../About";

interface IScreen {
  nodes: GLTFResult["nodes"];
  materials: GLTFResult["materials"];
}

const ContentScreen: React.FC<IScreen> = ({ nodes, materials }) => {
  const { isViewingContent } = useZuStore((store) => store.state.console);
  const { setIsViewingContent } = useZuStore((store) => store.actions);

  return (
    <motion.mesh
      /*       initial="on"
      animate={isViewingContent ? "on" : "off"}
      variants={{ off: { scale: [0, 1.1, 0] }, on: { scale: [1, 1.1, 1] } }} */
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      geometry={nodes.Cube004_1.geometry}
      material={materials.Border}
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
            className="wrapper-screen"
            transition={{}}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            <About />
          </motion.div>
        </Html>
      ) : null}
    </motion.mesh>
  );
};

export default ContentScreen;

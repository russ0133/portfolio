import React from "react";
import { motion } from "framer-motion-3d";
import { useZuStore } from "../../zustand/zuStore";
import { GLTFResult } from "../Console";
import { Html } from "@react-three/drei";

interface IScreen {
  nodes: GLTFResult["nodes"];
  materials: GLTFResult["materials"];
}

const ContentScreen: React.FC<IScreen> = ({ nodes, materials }) => {
  const { isPowerOn } = useZuStore((store) => store.state.console);
  const { setIsViewingContent } = useZuStore((store) => store.actions);

  return (
    <motion.mesh
      initial="off"
      animate={isPowerOn ? "on" : "off"}
      variants={{
        off: { scaleX: 0, scaleY: 0 },
        on: { scaleX: 5, scaleY: 5 },
      }}
      geometry={nodes.Cube004_1.geometry}
      material={isPowerOn ? materials.Screen : materials.Border}
      position={[0.05, -4.96, 0]}
      scale={[2, 1.2, 1.8]}
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
            initial="off"
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
              e.stopPropagation();
              setIsViewingContent(false);
            }}
          >
            <p>Content</p>
          </motion.div>
        </Html>
      ) : null}
    </motion.mesh>
  );
};

export default ContentScreen;

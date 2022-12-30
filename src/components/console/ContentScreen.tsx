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
    <motion.mesh key="hello" geometry={nodes.Cube004_1.geometry} position={[0.05, -0.22, 0]}>
      <Html position={[-0.005, 1.18, 1]} scale={[0.1, 0.1, 1]} transform occlude>
        <motion.div
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
        >
          {ConsoleScreenMenu[selectedOption].content}
        </motion.div>
      </Html>
    </motion.mesh>
  );
};

export default ContentScreen;

import {
  AccumulativeShadows,
  Backdrop,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  RandomizedLight,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Console from "./Console";
import { motion } from "framer-motion-3d";
import { AmbientLight } from "three";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from "@react-three/postprocessing";

function ThreeCanvas() {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const [text, setText] = React.useState("About me");
  const [hovering, setHovering] = React.useState(false);

  return (
    <div id="three-canvas" className={`${hovering ? "cursor-pointer" : ""}`}>
      <Canvas shadows orthographic camera={{ position: [0, 0, 100], zoom: 300 }}>
        <Stage adjustCamera={1.1} intensity={0.5} shadows="contact" environment="sunset">
          <ambientLight />
          <PresentationControls
            enabled={true} // the controls can be disabled by setting this to false
            global={false} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            rotation={[0, 0, 0]} // Default rotation
            polar={[0, 0]} // Vertical limits
            azimuth={[-0.5, 0.5]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          >
            <Console
              setAnimationComplete={setAnimationComplete}
              setHovering={setHovering}
              text={text}
              setText={setText}
            />
          </PresentationControls>
          {/* <OrbitControls /> */}
        </Stage>
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;

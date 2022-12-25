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
import React, { useEffect, useRef, useState } from "react";
import Console from "./Console";
import { useZuStore } from "../zustand/zuStore";
import Loading from "./Loading";

function ThreeCanvas() {
  const power = useZuStore((store) => store.state.power);
  const rotation = {
    x: power ? 0 : 0,
    y: power ? 0 : 0,
    z: power ? 0 : 0,
  };
  const [text, setText] = React.useState("About me");
  const [hovering, setHovering] = React.useState(false);

  const refff = useRef<any>();

  const [adjust, setAdjust] = useState<any>(1.12);
  useEffect(() => {
    document.body.style.cursor = hovering ? "pointer" : "default";
  }, [hovering]);

  useEffect(() => {
    setTimeout(() => setAdjust(false), 500);
  }, []);

  return (
    <div id="three-canvas" onClick={() => setAdjust(false)}>
      <Loading />
      <Canvas shadows orthographic camera={{ position: [0, 0, 100], zoom: 300 }}>
        <Stage adjustCamera={adjust} intensity={0.5} shadows="contact" environment="sunset">
          <ambientLight />
          <PresentationControls
            enabled={true} // the controls can be disabled by setting this to false
            global={false} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            rotation={[rotation.x, rotation.y, rotation.z]} // Default rotation
            polar={[-0.2, 0.2]} // Vertical limits
            azimuth={[-0.5, 0.5]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          >
            <Console setHovering={setHovering} text={text} setText={setText} />
          </PresentationControls>
        </Stage>
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;

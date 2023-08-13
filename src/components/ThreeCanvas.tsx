import React, { useEffect, useState } from "react";

import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "@components";
import { Loading, Social } from "@components/interface";
import { useZuStore } from "@zustand/store";

import { getGPUTier } from "detect-gpu";

function ThreeCanvas() {
  const power = useZuStore((store) => store.state.console.isPowerOn);
  const glSettings = useZuStore((store) => store.state.glSettings);
  const setGLSettings = useZuStore((store) => store.actions.setGLSettings);

  const rotation = {
    x: power ? 0 : 0,
    y: power ? 0 : 0,
    z: power ? 0 : 0,
  };
  const [hovering, setHovering] = React.useState(false);

  const { setIsViewingContent, setShouldReturnToPosition: setShouldMoveConsole } = useZuStore(
    (store) => store.actions
  );

  const [adjust, setAdjust] = useState<any>(1.12);

  useEffect(() => {
    document.body.style.cursor = hovering ? "pointer" : "default";
  }, [hovering]);

  useEffect(() => {
    setTimeout(() => setAdjust(false), 500);
  }, []);

  useEffect(() => {
    async function setRendererPrecision() {
      // You can await here
      const response = await getGPUTier();

      const currentGlSettings = { ...glSettings };
      console.log("GPU-Tier: ", response.tier);
      switch (response.tier) {
        case 1:
          currentGlSettings.precision = "lowp";
          currentGlSettings.powerPreference = "low-power";
          break;
        case 2:
          currentGlSettings.precision = "mediump";
          currentGlSettings.powerPreference = "default";
          break;
        case 3:
          currentGlSettings.precision = "highp";
          currentGlSettings.powerPreference = "high-performance";
          break;
        default:
          currentGlSettings.precision = "lowp";
          currentGlSettings.powerPreference = "low-power";
          break;
      }
      setGLSettings(currentGlSettings);
    }
    setRendererPrecision();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="three-canvas" className="border-red-400" onClick={() => setAdjust(false)}>
      <Loading />
      <Social />

      <Canvas
        shadows
        orthographic
        onPointerMissed={() => {
          setIsViewingContent(false);
          setShouldMoveConsole(true);
        }}
        gl={glSettings}
      >
        <Stage
          adjustCamera={adjust}
          intensity={0.5}
          shadows="contact"
          environment={{ files: "/venice_sunset_1k.hdr" }}
        >
          <ambientLight />
          <PresentationControls
            enabled={true} // the controls can be disabled by setting this to false
            global={false} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            polar={[-0.2, 0.2]} // Vertical limits
            azimuth={[-0.6, 0.6]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            rotation={[rotation.x, rotation.y, rotation.z]} // Default rotation
          >
            <Model setHovering={setHovering} />
          </PresentationControls>
        </Stage>
      </Canvas>

      <div className="footer text-white my-1 mx-2 z-50 font-gameover text-xs noselect">
        gabrieldsfs@gmail.com
      </div>
    </div>
  );
}

export default ThreeCanvas;

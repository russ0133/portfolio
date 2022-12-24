import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import ThreeCanvas from "./components/ThreeCanvas";

function App() {
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
  }, []);
  return (
    <div id="app">
      <Navbar />
      <ThreeCanvas />
    </div>
  );
}

export default App;

import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import ThreeCanvas from "./components/ThreeCanvas";

function App() {
  return (
    <div id="app">
      <Navbar />
      <ThreeCanvas />
    </div>
  );
}

export default App;

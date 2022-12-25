import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import ThreeCanvas from "./components/ThreeCanvas";
import { Scrollbars } from "react-custom-scrollbars-2";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const options = [
  { label: "About me", content: <About /> },
  { label: "Projects", content: <Projects /> },
  { label: "Contact", content: <Contact /> },
];

function App() {
  return (
    <div id="app" className="font-opensans">
      <Navbar />
      <ThreeCanvas />
    </div>
  );
}

export default App;

import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import ThreeCanvas from "./components/ThreeCanvas";
import { Scrollbars } from "react-custom-scrollbars-2";

export const options = [{ label: "About me" }, { label: "Projects" }, { label: "Contact" }];

function App() {
  const [loaded, setLoaded] = React.useState(false);
  const myRef = useRef<any>();
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
  }, []);
  return (
    <div id="app">
      {/*       <div
        className="hero h-screen flex  shadow-md"
        onClick={() => {
          console.log("Scroll");
        }}
      >
        <Link
          activeClass="active"
          to="three-canvas"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="bg-red-500">Hey!</button>
        </Link>
      </div> */}
      <Navbar />
      <ThreeCanvas />
    </div>
  );
}

export default App;

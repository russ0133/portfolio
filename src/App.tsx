import React from "react";
import Navbar from "./components/interface/Navbar";
import ThreeCanvas from "./components/ThreeCanvas";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const ConsoleScreenMenu = [
  { label: "About me", content: <About /> },
  { label: "Projects", content: <Projects /> },
  { label: "Contact", content: <Contact /> },
];

export const InformationParagraphs = [
  { text: "This is my portifolio.", classes: "text-white" },
  { text: "Navigate through the options clicking on buttons.", classes: "text-white" },
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

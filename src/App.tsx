import React from "react";

import { Navbar } from "@components/interface";
import { ThreeCanvas } from "@components";
import { About, Projects, Contact } from "@pages";

export const ConsoleScreenMenu = [
  { label: "About me", content: <About /> },
  { label: "Projects", content: <Projects /> },
  { label: "Contact", content: <Contact /> },
];

export const InformationParagraphs = [
  { text: "This is my portifolio.", classes: "text-white" },
  { text: "Navigate through the options clicking on buttons", classes: "text-white" },
  { text: "(on the gameboy model itself)", classes: "text-white mt-2 italic" },
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

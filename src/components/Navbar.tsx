import React from "react";
import TogglePower from "./onOff";

function Navbar() {
  return (
    <div id="navbar" onClick={() => console.log("eee")}>
      <TogglePower />
    </div>
  );
}

export default Navbar;

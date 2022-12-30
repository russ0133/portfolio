import React from "react";
import { useZuStore } from "@zustand/store";

export default function PowerIcon() {
  const power = useZuStore((store) => store.state.console.isPowerOn);
  const svgColor = power ? "green" : "grey";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={svgColor}
      className="w-8 h-8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
  );
}

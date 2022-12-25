import React, { useEffect } from "react";
import { useZuStore } from "../zustand/zuStore";
import Spinner from "./svg/Spinner";

function Loading() {
  const modelLoaded = useZuStore((store) => store.state.isModelLoaded);

  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    if (modelLoaded) setTimeout(() => setLoaded(true), 500);
  }, [modelLoaded]);

  return (
    <>
      {loaded ? null : (
        <div id="three-canvas" className="absolute z-20 w-screen">
          <div className="loader h-full">
            <div className="flex animate-bounce gap-2 text-xl items-center bg-purple-800/80 shadow-lg backdrop-blur-sm py-1 px-3 rounded-lg">
              <div>Loading... </div>
              <Spinner />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;

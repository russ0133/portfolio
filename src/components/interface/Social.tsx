import React from "react";

import { Tooltip } from "antd";
import { BsLinkedin, BsTwitter, BsGithub, BsCodeSlash } from "react-icons/bs";

export default function Social() {
  return (
    <div className="social text-white my-1 mx-6 z-50 font-gameover text-xs flex gap-4 items-center">
      <a href="https://www.linkedin.com/in/russ0133/" target="_blank">
        <BsLinkedin className="w-8 h-8 bg-gradient-to-br from-slate-800/50 to-slate-900/20 rounded-md p-1 cursor-pointer transition hover:scale-110" />
      </a>
      <a href="https://twitter.com/gabrieldsfs" target="_blank">
        <BsTwitter className="w-8 h-8 bg-gradient-to-br from-slate-800/50 to-slate-900/20 rounded-md p-1 cursor-pointer transition hover:scale-110" />
      </a>
      <a href="https://github.com/russ0133" target="_blank">
        <BsGithub className="w-8 h-8 bg-gradient-to-br from-slate-800/50 to-slate-900/20 rounded-md p-1 cursor-pointer transition hover:scale-110" />
      </a>
      <Tooltip title="Source code">
        <a href="https://github.com/russ0133/portfolio" target="_blank">
          <BsCodeSlash className="w-8 h-8 bg-gradient-to-br from-slate-800/50 to-slate-900/20 rounded-md p-1 cursor-pointer transition hover:scale-110" />
        </a>
      </Tooltip>
    </div>
  );
}

import React from "react";
import Typewriter from "typewriter-effect";
function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Developer",
          // "MERN Stack Developer",
          "Frontend Developer",
          "React.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;

import React from "react";

const TextBox = ({ Text }) => {
  return (
    <>
      <div className="md:w-48 w-60 rounded-lg p-2 relative md:my-5 my-0">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary via-accent to-secondary rounded-lg opacity-50 "></div>
        <div className="relative z-10 bg-backgrounds text-text font-medium capitalize rounded-lg p-3 py-10 h-full w-full">
          {Text}
        </div>
      </div>
    </>
  );
};

export default TextBox;

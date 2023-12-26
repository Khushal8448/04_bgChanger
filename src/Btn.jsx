import React from "react";

const Btn = ({ setColor, textColor, btnBgColor }) => {
  const colorToUse = btnBgColor.toLowerCase();
  return (
    <button
      onClick={() => setColor(colorToUse)}
      className="outline-none px-4 py-2 rounded-full shadow-lg"
      style={{ backgroundColor: colorToUse, color: textColor }}
    >
      {btnBgColor}
    </button>
  );
};

export default Btn;

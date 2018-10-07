import React from "react";

export const skews = (rewind, pause, fastForward) => [
  {
    onClick: rewind
  },
  {
    onClick: pause
  },
  {
    onClick: fastForward
  }
];

const RadialSkew = ({ onMouseLeave, onMouseEnter, onClick }) => {
  return (
    <div
      className="skew"
      data-target-attribute={"skew_gallery"}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    />
  );
};

export default RadialSkew;

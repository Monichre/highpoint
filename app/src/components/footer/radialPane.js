import React from "react";
import { ArrowPrev, ArrowNext, Play, Pause } from "../icons";

export const radials = (rewind, pause, fastForward) => [
  {
    onClick: rewind,
    component: <ArrowPrev />
  },
  {
    onClick: pause,
    component: <Pause />
  },
  {
    onClick: fastForward,
    component: <ArrowNext />
  }
];

const RadialPane = ({ onClick, children }) => {
  return (
    <p className="skew_process" onClick={onClick}>
      <span>{children}</span>
    </p>
  );
};

export default RadialPane;

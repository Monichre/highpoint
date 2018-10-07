import React from "react";
import { ArrowPrev, ArrowNext, Play, Pause } from "../icons";

export const radials = (rewind, pause, fastForward) => [
  {
    onClick: rewind,
    component: <ArrowPrev />,
    play: <ArrowPrev />
  },
  {
    onClick: pause,
    component: <Pause />,
    play: <Play />
  },
  {
    onClick: fastForward,
    component: <ArrowNext />,
    play: <ArrowNext />
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

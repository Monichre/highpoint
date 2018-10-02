import React from "react";

const CinderBlockSVG = ({ id, color }) => (
  <svg viewBox="0 0 220.05 195.91" className={`cinderblock cinder`} id={id}>
    <g
      id={`${id}_g`}
      className="cinder_lines"
      fill={`${color || "#000"}`}
      fillRule="evenodd"
      stroke={`${color || "#000"}`}
    >
      <path d="M202.07,10.29h18V0H0V10.29H22.7a2,2,0,0,1,2,2V178.61a7,7,0,0,1-7,7H0v10.3H220v-10.3h-18a7,7,0,0,1-7-7V17.29A7,7,0,0,1,202.07,10.29ZM147,92.23H72.75a7,7,0,0,1-7-7V17.29a7,7,0,0,1,7-7H147a7,7,0,0,1,7,7V85.23A7,7,0,0,1,147,92.23Zm7,17.29v69.09a7,7,0,0,1-7,7H72.75a7,7,0,0,1-7-7V109.52a7,7,0,0,1,7-7H147A7,7,0,0,1,154,109.52Z" />
    </g>
  </svg>
);

export default CinderBlockSVG;

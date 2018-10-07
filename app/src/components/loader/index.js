import React from "react";
import "./_loader.scss";

const Loader = () => {
  return (
    <div className="loader_bg">
      <div className="loader">
        <div className="loader__figure" />
        <p className="loader__label">HPG</p>
      </div>
    </div>
  );
};

export default Loader;

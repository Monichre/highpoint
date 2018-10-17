import React from "react";
import "./_index.scss";

const ProgressBar = () => {
  return (
    <div className="progress_bar" data-direction="horizontal">
      <div className="progress" />
      <div className="pin" id="progress-pin" data-method="rewind" />
    </div>
  );
};

export default ProgressBar;

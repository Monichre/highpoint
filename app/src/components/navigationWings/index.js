import React from "react";
import { DashboardIcon, MonitorIcon } from "../icons";
import "./_index.scss";

export const NavigationWings = () => (
  <div className="navigation_wings">
    <div className="horizontal_pane left_pane">
      <div className="inner">
        <DashboardIcon />
      </div>
    </div>
    <div className="horizontal_pane right_pane">
      <div className="inner">
        <MonitorIcon />
      </div>
    </div>
  </div>
);

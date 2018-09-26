import React, { Component } from "react";
import AppDispatcher from "../../flux/dispatchers";
import MobileRightNav from "./mobileRightNav";
import DefaultRightNav from "./defaultRightNav";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();
const RightNav = props =>
  status ? <MobileRightNav {...props} /> : <DefaultRightNav {...props} />;

export default RightNav;

import React from "react";
import MobileRightNav from "./mobileRightNav";
import DefaultRightNav from "./defaultRightNav";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();
const RightNav = props =>
  status ? <MobileRightNav {...props} /> : <DefaultRightNav {...props} />;

export default RightNav;

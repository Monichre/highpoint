import React from "react";
import DefaultLeftNav from "./defaultLeftNav";
import MobileLeftNav from "./mobileLeftNav";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();
const LeftNav = () => (status ? <MobileLeftNav /> : <DefaultLeftNav />);

export default LeftNav;

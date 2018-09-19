import React from "react";
import StoryRouter from "storybook-react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import LeftNav from "../src/components/leftNav";
import RightNav from "../src/components/rightNav";

import "../src/sass/_base.scss";
import "../src/sass/_typography.scss";
import "../src/sass/_variables.scss";
import "../src/sass/_global.scss";
import "../src/App.scss";
import "../src/components/leftNav/_ln.scss";
import "../src/components/rightNav/_rn.scss";

const location = {
  pathname: "/portfolio"
};

storiesOf("Components/Nav/LeftNav", module)
  .addDecorator(StoryRouter())
  .add("Standard", () => <LeftNav isMobile={true} />);

storiesOf("Components/Nav/RightNav", module)
  .addDecorator(StoryRouter())
  .add("Standard", () => <RightNav />)
  .add("With Property Menu Open", () => <RightNav location={location} />);

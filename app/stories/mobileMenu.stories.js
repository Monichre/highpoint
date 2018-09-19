import React, { Fragment } from "react";
import StoryRouter from "storybook-react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import LeftNav from "../src/components/leftNav";
import MobileMenu from "../src/components/mobileMenu";
import CinderBlock from "../src/components/cinderblock";

import "../src/sass/_base.scss";
import "../src/sass/_typography.scss";
import "../src/sass/_variables.scss";
import "../src/sass/_global.scss";
import "../src/App.scss";
import "../src/components/leftNav/_ln.scss";
import "../src/components/rightNav/_rn.scss";
import "../src/components/mobileMenu/_index.scss";

const mobileLinks = ["Portfolio", "Process", "Gallery", "Contact"];

const LeftNavDecorator = storyFunc => (
  <Fragment>
    {storyFunc()}
    <section className="left_nav">
      <div className="inner">
        <ul style={{ listStyle: "none" }} className="top">
          <li className="logo_link" style={{ width: "100%" }}>
            <CinderBlock context="portfolio" id="cinderblock_navigation" />
          </li>
        </ul>
        <ul className="middle">
          {mobileLinks.map((link, i) => (
            <div>Link</div>
          ))}
        </ul>
        <ul className="bottom">
          <li className={`hover-link menu-trigger`} onClick={action("clicked")}>
            <div className={`text`} />
            <div className="hover-link-icon">
              <span />
              <span />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </Fragment>
);

storiesOf("Components/Nav/LeftNav/MobileMenu", module)
  .addDecorator(StoryRouter())
  .addDecorator(LeftNavDecorator)
  .add("with Left Nav Decorator", () => <MobileMenu links={mobileLinks} />);
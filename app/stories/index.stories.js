import React from "react";
import StoryRouter from "storybook-react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { FancyButton } from "../src/components/viewProcessButton/fancyButton";
import { AlternateButton } from "../src/components/viewProcessButton/alternateButton";

import "../src/sass/_base.scss";
import "../src/sass/_typography.scss";
import "../src/sass/_variables.scss";
import "../src/sass/_global.scss";
import "../src/App.scss";
import "../src/components/viewProcessButton/_index.scss";

import { propertyTwo } from "./dummy-data";

const ButtonContainer = props => (
  <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      height: "auto",
      transform: "translateY(40vh)",
      alignContent: "center"
    }}
  >
    {props.children}
  </div>
);

storiesOf("Components/Buttons/FancyButton", module)
  .addDecorator(StoryRouter())
  .add("View", () => (
    <ButtonContainer>
      <FancyButton property={propertyTwo} />
    </ButtonContainer>
  ));

storiesOf("Components/Buttons/AlternateButton", module)
  .addDecorator(StoryRouter())
  .add("View", () => (
    <ButtonContainer>
      <AlternateButton property={propertyTwo} />
    </ButtonContainer>
  ));

storiesOf("Components/Buttons/ShimmerButton", module)
  .addDecorator(StoryRouter())
  .add("View", () => (
    <ButtonContainer>
      <ShimmerButton property={propertyTwo} />
    </ButtonContainer>
  ));

storiesOf("Components/Buttons/HoverButton", module)
  .addDecorator(StoryRouter())
  .add("View", () => (
    <ButtonContainer>
      <HoverButton property={propertyTwo} />
    </ButtonContainer>
  ));

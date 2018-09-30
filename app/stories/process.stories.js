import React from "react";
import StoryRouter from "storybook-react-router";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { ProcessCardPreview } from "../src/components/processCardPreview";
import { QuiltedGrid } from "../src/components/grid/quilted";

import "../src/sass/_base.scss";
import "../src/sass/_typography.scss";
import "../src/sass/_variables.scss";
import "../src/sass/_global.scss";
import "../src/App.scss";
import "../src/components/processCardPreview/_index.scss";

import { processOne, processTwo } from "./dummy-data";

const QuiltContainer = props => (
  <div className="process_page component">
    <h1 className="page_title">Process</h1>
    <QuiltedGrid>{props.children}</QuiltedGrid>
  </div>
);

storiesOf("Components/ProcessCardPreview", module)
  .addDecorator(StoryRouter())
  .add("Card Preview", () => (
    <QuiltContainer>
      <ProcessCardPreview process={processOne} />
    </QuiltContainer>
  ));

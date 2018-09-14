import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { PortfolioCard } from "../src/components/portfolioCard";

import { propertyOne, propertyTwo } from "./dummy-data";
import "../src/sass/_base.scss";
import "../src/sass/_typography.scss";
import "../src/sass/_variables.scss";
import "../src/sass/_global.scss";
import "../src/App.scss";
import "../src/components/portfolioCard/_portfolioCard.scss";
import "../src/components/viewProcessButton/_index.scss";

storiesOf("Portfolio/Cards/Horizontal", module).add("Card", () => (
  <PortfolioCard mobileStatus={false} property={propertyOne} />
));

storiesOf("Portfolio/Cards/Vertical", module).add("Card", () => (
  <PortfolioCard mobileStatus={false} property={propertyTwo} />
));

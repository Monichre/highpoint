import { LineMaker } from "./lineMaker";
import { BROWSER } from "../../utils/browser";
import { homeLines } from "./home-lines";
import { siteCornerLines } from "./corner-lines";
import { pageLines } from "./page-lines";

const winWidth = document.querySelector("body").offsetWidth;
const isMobile = BROWSER.isMobile(winWidth);

const hl = homeLines(isMobile);
const cl = siteCornerLines(isMobile);
const pl = pageLines(isMobile);

export const homePageLines = () => {
  const lines = new LineMaker({
    position: "fixed",
    lines: hl
  });
  lines.animateLinesIn();
};

export const cornerLines = () => {
  const lines = new LineMaker({
    position: "fixed",
    lines: cl
  });
  lines.animateLinesIn();
};

export const leftNavigationLines = el => {
  const lines = new LineMaker({
    position: "fixed",
    lines: cl,
    parent: {
      element: el,
      position: "prepend"
    }
  });
  return lines;
};

export const rightNavigationLines = el => {
  const lines = new LineMaker({
    position: "fixed",
    lines: cl,
    parent: {
      element: el,
      position: "prepend"
    }
  });
  return lines;
};

export const processPortfolioLines = (sidebar = false) => {
  const lines = new LineMaker({
    position: "fixed",
    lines: pl
  });
  if (!sidebar) {
    lines.animateLinesIn();
  }

  return lines;
};

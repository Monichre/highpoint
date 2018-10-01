import { LineMaker } from "./lineMaker";
import { BROWSER } from "../../utils/browser";
import { homeLines } from "./home-lines";
import { siteCornerLines } from "./corner-lines";
import { leftLines } from "./left-lines";
import { rightLines } from "./right-lines";
import { pageLines } from "./page-lines";

const winWidth = document.querySelector("body").offsetWidth;
const isMobile = BROWSER.isMobile(winWidth);

const hl = homeLines(isMobile);
const cl = siteCornerLines(isMobile);
const pl = pageLines(isMobile);
const ll = leftLines(isMobile);
const rl = rightLines(isMobile);

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
    lines: ll,
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
    lines: rl,
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

import { LineMaker } from "./lineMaker";
import { BROWSER } from "../../utils/browser";
import { homeLines } from "./home-lines";
import { leftLines } from "./left-lines";
import { rightLines } from "./right-lines";
import { pageLines } from "./page-lines";

export const homePageLines = () => {
  const winWidth = document.querySelector("body").offsetWidth;
  const isMobile = BROWSER.isMobile(winWidth);
  const hl = homeLines(isMobile);

  const lines = new LineMaker({
    position: "fixed",
    lines: hl
  });
  lines.animateLinesIn();
};

export const leftNavigationLines = el => {
  const winWidth = document.querySelector("body").offsetWidth;
  const isMobile = BROWSER.isMobile(winWidth);
  const ll = leftLines(isMobile);
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
  const winWidth = document.querySelector("body").offsetWidth;
  const isMobile = BROWSER.isMobile(winWidth);
  const rl = rightLines(isMobile);
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
  const winWidth = document.querySelector("body").offsetWidth;
  const isMobile = BROWSER.isMobile(winWidth);
  const pl = pageLines(isMobile);
  const lines = new LineMaker({
    position: "fixed",
    lines: pl
  });
  if (!sidebar) {
    lines.animateLinesIn();
  }

  return lines;
};

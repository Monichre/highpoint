import { LineMaker } from "./lineMaker";
import { BROWSER } from "../../utils/browser";
import { homeLines } from "./home-lines";
import { siteCornerLines } from "./corner-lines";
import { pageLines } from "./page-lines";

const winWidth = document.querySelector("body").offsetWidth;
const isMobile = BROWSER.isMobile(winWidth);
console.log(isMobile);
const hl = homeLines(isMobile);
const cl = siteCornerLines(isMobile);
const pl = pageLines(isMobile);

if (isMobile.status) {
  // hl.length = 4
}

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

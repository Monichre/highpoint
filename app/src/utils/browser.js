import _ from "lodash";

class TheBrowser {
  constructor() {
    this.window = {};
    this.status = false;
    this.isPhone = false;
    this.isTablet = false;
    this.isLargeTablet = false;
    this.isDesktop = false;
  }
  mQ = num => window.matchMedia(`(max-width: ${num}px)`);

  isSafari = () => navigator.userAgent.indexOf("Safari") > -1;

  isChrome = () => navigator.userAgent.indexOf("Chrome") > -1;

  isExplorer = () =>
    navigator.appName === "Microsoft Internet Explorer" ||
    !!(
      navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)
    ) ||
    navigator.userAgent.indexOf("MSIE") > -1;

  isFirefox = () => navigator.userAgent.indexOf("Firefox") > -1;

  isEdge = () => navigator.userAgent.indexOf("Edge/") > -1;

  handlePolyfill = () => {
    const body = document.querySelector("body");
    const polyfill = document.createElement("script");
    polyfill.src =
      "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js";
    polyfill.id = "polyfill";
    body.appendChild(polyfill);
  };

  removePolyFill = () => {
    const body = document.querySelector("body");
    const polyfill = document.getElementById("polyfill");
    body.removeChild(polyfill);
  };

  isSmallerThanTablet = num => num <= 780;

  isLandscape = () => window.orientation === 90;

  isMobile = () => {
    const winWidth = document.querySelector("body").offsetWidth;
    let status = false;
    let isPhone = false;
    let isTablet = false;
    let isLargeTablet = false;
    let isDesktop = false;

    if (winWidth <= 1024) {
      status = true;
    }

    if (winWidth <= 480) {
      isPhone = true;
    } else if (winWidth > 480 && winWidth < 768) {
      isTablet = true;
    } else if (winWidth > 768) {
      isLargeTablet = true;
    } else {
      isDesktop = true;
    }
    this.status = status;
    this.isPhone = isPhone;
    this.isTablet = isTablet;
    this.isLargeTablet = isLargeTablet;
    this.isDesktop = isDesktop;

    console.log(status, isPhone, isTablet, isLargeTablet, isDesktop, winWidth);

    return {
      status,
      isPhone,
      isTablet,
      isLargeTablet,
      isDesktop
    };
  };

  isShrinkingVertically = browser_height => browser_height <= 600;

  handleResize = () => {
    console.log("browser is resizing");
    const { status, isTablet } = this.isMobile();
    if (status) {
      document.querySelector("body").classList.add("isMobile");
    }
    if (isTablet) {
      window.location.reload();
    }
  };

  listenForResize = () =>
    window.addEventListener("resize", _.debounce(this.handleResize, 100));

  addObjectFindPolyfill = () => {
    if (!Array.prototype.find) {
      return Object.defineProperty(Array.prototype, "find", {
        value: function(predicate) {
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this);
          var len = o.length >>> 0;

          if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
          }

          var thisArg = arguments[1];
          var k = 0;

          while (k < len) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue;
            }
            // e. Increase k by 1.
            k++;
          }

          // 7. Return undefined.
          return undefined;
        }
      });
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function(target, varArgs) {
        // .length of function is 2
        "use strict";
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      };
    }
  };
}

export const BROWSER = new TheBrowser();

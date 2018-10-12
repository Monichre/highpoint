import _ from "lodash";
import { IE_HANDLER } from "./ie";

class TheBrowser {
  constructor() {
    this.window = {};
    this.status = false;
    this.isPhone = false;
    this.isTablet = false;
    this.isLargeTablet = false;
    this.isDesktop = false;
    this.isMobileDevice = false;
    this.initialWindowSize = null;
    this.isSafari = false;
    this.isChrome = false;
    this.isExplorer = false;
    this.isFirefox = false;
    this.isEdge = false;
  }
  mQ = num => window.matchMedia(`(max-width: ${num}px)`);

  isSafariBrowser = () => {
    this.isSafari = /constructor/i.test(window.HTMLElement);
    return this.isSafari;
  };

  isChromeBrowser = () => {
    this.isChrome = !!window.chrome && !!window.chrome.webstore;
    return this.isChrome;
  };

  isExplorerBrowser = () => {
    this.isExplorer =
      navigator.appName === "Microsoft Internet Explorer" ||
      !!(
        navigator.userAgent.match(/Trident/) ||
        navigator.userAgent.match(/rv:11/)
      ) ||
      navigator.userAgent.indexOf("MSIE") > -1;

    return this.isExplorer;
  };

  isFirefoxBrowser = () => {
    this.isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    return this.isFirefox;
  };

  isEdgeBrowser = () => {
    this.isEdge = navigator.userAgent.indexOf("Edge/") > -1;
    return this.isEdge;
  };

  determineBrowser = () => {
    const body = document.querySelector("body");
    const {
      windowWidth,
      status,
      isPhone,
      isTablet,
      isLargeTablet,
      isDesktop,
      isMobileDevice
    } = this.isMobile();

    if (this.isSafariBrowser()) {
      body.classList.add("isSafari");
    }
    if (this.isChromeBrowser()) {
      body.classList.add("isChrome");
    }
    if (this.isExplorerBrowser()) {
      body.classList.add("isExplorer");
    }
    if (this.isFirefoxBrowser()) {
      body.classList.add("isFirefox");
    }
    if (this.isEdgeBrowser()) {
      body.classList.add("isEdge");
    }
    if (this.isEdge || this.isExplorer) {
      this.handlePolyfill();
    }
  };

  isUsingMobileDevice = () => {
    let check = false;

    const checkMobile = a => {
      if (
        /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      ) {
        check = true;
      }
    };

    checkMobile(navigator.userAgent || navigator.vendor || window.opera);

    this.isMobileDevice = check;
    return check;
  };

  handlePolyfill = () => {
    if (!Object.entries)
      Object.entries = function(obj) {
        var ownProps = Object.keys(obj),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
      };
    this.addObjectFindPolyfill();
    const body = document.querySelector("body");
    const polyfillOne = document.createElement("script");
    const polyfillTwo = document.createElement("script");

    polyfillOne.src =
      "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js";
    polyfillOne.id = "polyfillOne";

    body.appendChild(polyfillTwo);
  };

  removePolyFill = () => {
    const body = document.querySelector("body");
    const polyfill = document.getElementById("polyfillOne");
    const polyfillTwo = document.getElementById("polyfillTwo");
    body.removeChild(polyfill);
    body.removeChild(polyfillTwo);
  };

  isSmallerThanTablet = num => num <= 780;

  isLandscape = () => window.orientation === 90;

  isMobile = () => {
    const winWidth = document.querySelector("body").clientWidth;
    let status = false;
    let isPhone = false;
    let isTablet = false;
    let isLargeTablet = false;
    let isDesktop = false;
    this.isUsingMobileDevice();

    if (winWidth <= 1024) {
      status = true;
    }

    if (winWidth <= 480) {
      isPhone = true;
    } else if (winWidth > 480 && winWidth < 768) {
      isTablet = true;
    } else if (winWidth > 768 && winWidth < 1282) {
      isLargeTablet = true;
    } else {
      isDesktop = true;
    }
    this.windowWidth = winWidth;
    this.status = status;
    this.isPhone = isPhone;
    this.isTablet = isTablet;
    this.isLargeTablet = isLargeTablet;
    this.isDesktop = isDesktop;

    return {
      windowWidth: this.windowWidth,
      status: this.status,
      isPhone: this.isPhone,
      isTablet: this.isTablet,
      isLargeTablet: this.isLargeTablet,
      isDesktop: this.isDesktop,
      isMobileDevice: this.isMobileDevice
    };
  };

  isShrinkingVertically = browser_height => browser_height <= 600;

  handleResize = () => {
    const _this = this;
    let resizeTimer;

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function() {
      const {
        windowWidth,
        status,
        isPhone,
        isTablet,
        isLargeTablet,
        isDesktop,
        isMobileDevice
      } = _this.isMobile();

      if (status) {
        document.querySelector("body").classList.add("isMobile");
      }
      if (_this.initialWindowSize > windowWidth && (isTablet || isPhone)) {
        window.location.reload(true);
        _this.initialWindowSize = windowWidth;
      }
      if (
        _this.initialWindowSize < windowWidth &&
        (isLargeTablet || isDesktop)
      ) {
        // window.location.reload(true);
        _this.initialWindowSize = windowWidth;
      }
    }, 1000);
  };

  listenForResize = () => {
    window.addEventListener("resize", _.debounce(this.handleResize, 100));
  };

  lazyLoader = () => {
    !(function() {
      function i() {
        const t = document.querySelectorAll("img.lazyload");
        let e = t.length;
        for (!e && window.removeEventListener("scroll", i); e--; ) {
          const r = window.innerHeight;
          if (t[e].getBoundingClientRect().top - r <= 100) {
            if (
              (t[e].getAttribute("data-src") &&
                (t[e].src = t[e].getAttribute("data-src")),
              t[e].getAttribute("data-srcset") &&
                (t[e].srcset = t[e].getAttribute("data-srcset")),
              t[e].parentElement.tagName === "PICTURE")
            ) {
              for (
                let n = t[e].parentElement.querySelectorAll("source"),
                  a = n.length;
                a--;

              ) {
                n[a].srcset = n[a].getAttribute("data-srcset");
              }
            }
            t[e].addEventListener("load", function() {
              this.classList.remove("lazyload");
            });
          }
        }
      }
      i(), window.addEventListener("scroll", i);
    })();
  };
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
  init = () => {
    const winWidth = document.querySelector("body").clientWidth;
    this.initialWindowSize = winWidth;
    IE_HANDLER.console();
    this.determineBrowser();
    this.listenForResize();
    this.lazyLoader();
  };
}

export const BROWSER = new TheBrowser();

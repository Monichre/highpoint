const defaultLines = status => {
  const lines = [
    {
      top: 0,
      left: "10%",
      width: 3,
      height: status ? "12vh" : "20vh",
      color: "#333",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: status ? "10%" : "15%",
      left: 0,
      width: "12vw",
      height: 3,
      color: "#333",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "LeftRight"
      }
    }
  ];
  return lines;
};

const tabletLines = [
  {
    top: 0,
    left: "10%",
    width: 3,
    height: "12vh",
    color: "#333",
    hidden: true,
    animation: {
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 0,
      direction: "TopBottom"
    }
  },
  {
    top: "10%",
    left: 0,
    width: "12vw",
    height: 3,
    color: "#333",
    hidden: true,
    animation: {
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 0,
      direction: "LeftRight"
    }
  }
];

const iPhoneLines = [
  {
    top: 0,
    left: "20%",
    width: 3,
    height: "12vh",
    color: "#333",
    hidden: true,
    animation: {
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 0,
      direction: "TopBottom"
    }
  },
  {
    top: "10%",
    left: 0,
    width: "22vw",
    height: 3,
    color: "#333",
    hidden: true,
    animation: {
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 0,
      direction: "LeftRight"
    }
  }
];

export const leftLines = isMobile => {
  const {
    isPhone,
    isTablet,
    isMediumTablet,
    isLargeTablet,
    isMobileDevice
  } = isMobile;
  console.log(isPhone, isTablet, isMediumTablet, isLargeTablet, isMobileDevice);
  const status = isMediumTablet || isMobileDevice || isLargeTablet;
  return isPhone
    ? iPhoneLines
    : isTablet || isMediumTablet
      ? tabletLines
      : defaultLines(status);
};

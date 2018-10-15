const defaultLines = isTablet => {
  const bottomLines = [
    {
      width: 3,
      height: "20vh",
      left: "90%",
      top: "83%",
      color: "#333",
      hidden: true,
      animation: {
        duration: 1000,
        easing: "easeInOutExpo",
        delay: 200,
        direction: "BottomTop"
      }
    },

    {
      top: isTablet ? "90%" : "85%",
      left: "88%",
      width: isTablet ? "12vw" : "25vw",
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
  const topLines = [
    {
      width: 3,
      height: isTablet ? "12vh" : "20vh",
      left: isTablet ? "90%" : "79.5%",
      top: "0",
      color: "#333",
      hidden: true,
      animation: {
        duration: 1000,
        easing: "easeInOutExpo",
        delay: 200,
        direction: "TopBottom"
      }
    },

    {
      top: isTablet ? "10%" : "15%",
      left: isTablet ? "88%" : "78%",
      width: isTablet ? "12vw" : "25vw",
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
  return isTablet ? topLines : bottomLines;
};

const mobilePhoneLines = [
  {
    width: 3,
    height: "12vh",
    left: "79.5%",
    top: "0",
    color: "#333",
    hidden: true,
    animation: {
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 200,
      direction: "TopBottom"
    }
  },
  {
    top: "10%",
    left: "78%",
    width: "25vw",
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

export const rightLines = isMobile => {
  const { isPhone, isTablet, isLargeTablet, isMobileDevice } = isMobile;
  const status = isLargeTablet || isMobileDevice;

  return isPhone ? mobilePhoneLines : defaultLines(status);
};

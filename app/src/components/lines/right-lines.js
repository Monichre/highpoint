const defaultLines = status => {
  const lines = [
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
      top: status ? "90%" : "85%",
      left: "88%",
      width: status ? "12vw" : "25vw",
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

const iPhoneLines = [
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
  const { status, isPhone, isTablet, isDesktop } = isMobile;
  return isPhone ? iPhoneLines : defaultLines(status);
};

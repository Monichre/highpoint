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
    },
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
  if (status) {
    lines.length = 2;
  }
  return lines;
};

const iPhoneLines = [
  {
    top: 0,
    left: "20%",
    width: 3,
    height: "12vh",
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
    top: "10%",
    left: 0,
    width: "22vw",
    height: 3,
    color: "#333",
    hidden: true,
    animation: {
      duration: 2000,
      easing: "easeInOutExpo",
      delay: 0,
      direction: "LeftRight"
    }
  },
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

export const siteCornerLines = isMobile => {
  const { status, isPhone, isTablet, isDesktop } = isMobile;
  return isPhone ? iPhoneLines : defaultLines(status);
};

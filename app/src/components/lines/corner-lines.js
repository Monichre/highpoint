export const siteCornerLines = isMobile => {
  const { status, isPhone, isTablet, isDesktop } = isMobile;
  console.log(isPhone);
  return [
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
      top: "80%",
      left: "90%",
      width: 3,
      height: "15vh",
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
};

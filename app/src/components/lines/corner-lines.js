export const siteCornerLines = isMobile => {
  const { status, isPhone, isTablet, isDesktop } = isMobile;
  console.log(isPhone);
  return [
    {
      top: 0,
      left: status ? "10%" : "20%",
      width: 3,
      height: status ? "12vh" : "30vh",
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
    },
    {
      top: status ? "88%" : "70%",
      left: status ? "90%" : "80%",
      width: 3,
      height: status ? "12vh" : "30vh",
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
      left: status ? "88%" : "75%",
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

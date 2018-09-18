export const homeLines = isMobile => {
  const { status, isPhone, isTablet, isDesktop } = isMobile;

  return [
    {
      top: 0,
      left: "10%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: 0,
      left: "25%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: 0,
      left: status ? "30%" : "40%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: 0,
      left: status ? "50%" : "60%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: 0,
      left: status ? "70%" : "75%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    },
    {
      top: 0,
      left: "90%",
      width: 1,
      height: "100vh",
      color: "#c7c6c6",
      hidden: true,
      animation: {
        duration: 2000,
        easing: "easeInOutExpo",
        delay: 0,
        direction: "TopBottom"
      }
    }
  ];
};

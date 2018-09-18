export const pageLines = isMobile => {
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

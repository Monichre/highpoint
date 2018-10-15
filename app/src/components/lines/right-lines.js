const defaultLines = isTablet => {
  const bottomLines = [
    {
      width: 3,
      height: isTablet ? "12vh" : "20vh",
      left: "90%",
      top: isTablet ? "88%" : "83%",
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
  // const topLines = [
  // {
  //   width: 3,
  //   height: isTablet ? '12vh' : '20vh',
  //   left: isTablet ? '90%' : '79.5%',
  //   top: '0',
  //   color: '#333',
  //   hidden: true,
  //   animation: {
  //     duration: 1000,
  //     easing: 'easeInOutExpo',
  //     delay: 200,
  //     direction: 'TopBottom'
  //   }
  // },

  // {
  //   top: isTablet ? '10%' : '15%',
  //   left: isTablet ? '88%' : '78%',
  //   width: isTablet ? '12vw' : '25vw',
  //   height: 3,
  //   color: '#333',
  //   hidden: true,
  //   animation: {
  //     duration: 2000,
  //     easing: 'easeInOutExpo',
  //     delay: 0,
  //     direction: 'LeftRight'
  //   }
  // }
  // ]
  return bottomLines;
};

const tabletLines = [
  {
    width: 3,
    height: "12vh",
    left: "90%",
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
    left: "88%",
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
  const {
    isPhone,
    isTablet,
    isMediumTablet,
    isLargeTablet,
    isMobileDevice,
    isDesktop
  } = isMobile;
  console.log(isPhone, isTablet, isMediumTablet, isLargeTablet, isMobileDevice);
  const status = isMediumTablet || isMobileDevice || isLargeTablet;

  return isPhone
    ? mobilePhoneLines
    : isMediumTablet || isTablet || isLargeTablet || isMobileDevice
      ? tabletLines
      : defaultLines(status);
};

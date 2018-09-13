export const siteCornerLines = (isMobile) => {
  const { status, isPhone, isTablet, isDesktop } = isMobile
  console.log(isPhone)
  return [
    {
      top: 0,
      left: status ? '20%' : '10%',
      width: 3,
      height: status ? '15vh' : '30vh',
      color: '#333',
      hidden: true,
      animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
    },
    {
      top: status ? '10%' : '15%',
      left: 0,
      width: status ? '25vw' : '15vw',
      height: 3,
      color: '#333',
      hidden: true,
      animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
    },
    {
      top: status ? '85%' : '70%',
      left: status ? '80%' : '90%',
      width: 3,
      height: status ? '10vh' : '30vh',
      color: '#333',
      hidden: true,
      animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }
    },

    {
      top: status ? '90%' : '85%',
      left: status ? '75%' : '85%',
      width: status ? '25vw' : '15vw',
      height: 3,
      color: '#333',
      hidden: true,
      animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
    }
  ]
}

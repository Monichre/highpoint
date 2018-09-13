export const siteCornerLines = (isMobile) => [
  {
    top: 0,
    left: isMobile ? '20%' : '10%',
    width: 3,
    height: isMobile ? '20vh' : '30vh',
    color: '#333',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  },
  {
    top: '15%',
    left: 0,
    width: isMobile ? '25vw' : '15vw',
    height: 3,
    color: '#333',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
  },
  {
    top: isMobile ? '80%' : '70%',
    left: isMobile ? '80%' : '90%',
    width: 3,
    height: isMobile ? '20vh' : '30vh',
    color: '#333',
    hidden: true,
    animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }
  },

  {
    top: '85%',
    left: isMobile ? '75%' : '85%',
    width: isMobile ? '25vw' : '15vw',
    height: 3,
    color: '#333',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
  }
]

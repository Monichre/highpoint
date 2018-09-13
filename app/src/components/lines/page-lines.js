export const pageLines = (isMobile) => [
  {
    top: 0,
    left: isMobile ? '20%' : '10%',
    width: 1,
    height: '100vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  },
  {
    top: 0,
    left: isMobile ? '80%' : '90%',
    width: 1,
    height: '100vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  }
]

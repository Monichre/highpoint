export const homeLines = (isMobile) => [
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
    left: isMobile ? '40%' : '30%',
    width: 1,
    height: '100vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  },
  {
    top: 0,
    left: isMobile ? '60%' : '50%',
    width: 1,
    height: isMobile ? '100vh' : '85vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  },
  {
    top: 0,
    left: isMobile ? '80%' : '70%',
    width: 1,
    height: '100vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  },
  {
    top: 0,
    left: '90%',
    width: 1,
    height: '100vh',
    color: '#c7c6c6',
    hidden: true,
    animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
  }
]

import {LineMaker} from './lineMaker'
import {BROWSER} from '../../utils/browser'
const winWidth = document.querySelector('body').offsetWidth
const isMobile = BROWSER.isSmallerThanTablet(winWidth)
console.log(isMobile)

const homeLines = [
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

if (isMobile) {
  homeLines.length = 4
}

export const homePageLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: homeLines
  })
  lines.animateLinesIn()
}

export const cornerLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: [
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
  })
  lines.animateLinesIn()
}
export const processPortfolioLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: [
      {
        top: 0,
        left: '10%',
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
  })

  lines.animateLinesIn()
}

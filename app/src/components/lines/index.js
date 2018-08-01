import {LineMaker} from './lineMaker'

export const homePageLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: [
      {
        top: 0,
        left: '10%',
        width: 3,
        height: '30vh',
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: '20%',
        left: 0,
        width: '20vw',
        height: 3,
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      },
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
        left: '30%',
        width: 1,
        height: '100vh',
        color: '#c7c6c6',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: 0,
        left: '50%',
        width: 1,
        height: '85vh',
        color: '#c7c6c6',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: 0,
        left: '70%',
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
  lines.animateLinesIn(() => {
    console.log('in the callback')
  })
}
export const cornerLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: [
      {
        top: 0,
        left: '10%',
        width: 3,
        height: '30vh',
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: '20%',
        left: 0,
        width: '20vw',
        height: 3,
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      },
      {
        top: "70%",
        left: '90%',
        width: 3,
        height: '30vh',
        color: '#333',
        hidden: true,
        animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }
      },
   
      {
        top: '80%',
        left: '80%',
        width: '20vw',
        height: 3,
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      }
    ]
  })
  lines.animateLinesIn(() => {
    console.log('in the callback')
  })
}
export const processPortfolioLines = () => {
  const lines = new LineMaker({
    position: 'fixed',
    lines: [
      {
        top: 0,
        left: '10%',
        width: 3,
        height: '30vh',
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: '20%',
        left: 0,
        width: '20vw',
        height: 3,
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      },
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

  lines.animateLinesIn(() => {
    console.log('in the callback')
  })
}
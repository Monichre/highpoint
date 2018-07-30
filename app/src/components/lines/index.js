import {LineMaker} from './lineMaker'

export const homePageLines = () => {
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
        
        top: '80%',
        left: '70%',
        width: 3,
        height: '20vh',
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
      },
      {
        top: '87%',
        left: '65%',
        width: '35vw',
        height: 3,
        color: '#333',
        hidden: true,
        animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      },
    
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
      { top: '15%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true },
      { top: '85%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true },
      { top: 0, left: '90%', width: 2, height: '100%', color: '#ddd', hidden: true },
      { top: 0, left: '10%', width: 2, height: '100%', color: '#ddd', hidden: true },
      {
        top: '15%',
        left: 0,
        width: '100%',
        height: 2,
        color: '#000',
        hidden: true,
        animation: { duration: 1000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }
      },
      {
        top: '85%',
        left: 0,
        width: '100%',
        height: 2,
        color: '#000',
        hidden: true,
        animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'RightLeft' }
      },
      {
        top: 0,
        left: '90%',
        width: 2,
        height: '100%',
        color: '#000',
        hidden: true,
        animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }
      },
      {
        top: 0,
        left: '10%',
        width: 2,
        height: '100%',
        color: '#000',
        hidden: true,
        animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }
      }
    ]
  })

  setTimeout(function() {
    lines.animateLineIn(4, {
      complete: function() {
        lines.showLine(0)
      }
    })
    lines.animateLineIn(5, {
      complete: function() {
        lines.showLine(1)
      }
    })
    lines.animateLineIn(6, {
      complete: function() {
        lines.showLine(2)
      }
    })
    lines.animateLineIn(7, {
      complete: function() {
        lines.showLine(3)
      }
    })
  }, 100)

  setTimeout(function() {
    lines.animateLineOut(4)
    lines.animateLineOut(5)
    lines.animateLineOut(6)
    lines.animateLineOut(7)
  }, 2000)

  setTimeout(function() {
    // lines.createLine({
    //   top: '70vh',
    //   left: '21vw',
    //   width: '60vw',
    //   height: 16,
    //   color: '#333',
    //   hidden: true,
    //   animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'LeftRight' }
    // })

    lines.animateLineIn(8)
  }, 2000)
}
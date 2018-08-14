import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  componentDidMount() {}
  get_mouse = e => {
    const tippy = document.getElementById('tooltip')
    tippy.style.opacity = 1
    // let x = e.clientX
    // let y = e.clientY
    // console.log(x, y)
    // console.log(tippy)
    document.onmousemove = e => {
      let x = e.clientX
      let y = e.clientY
      setTimeout(() => {
        tippy.style.top = (y - 100) + 'px'
        tippy.style.left = (x - 50)+ 'px'
      }, 1)
    }
  }

  render() {
    return (
      <Fragment>
        <div id="tooltip">Watch the video</div>
        <ReactPlayer
          onClick={this.props.launchFullVideo}
          playing
          playsinline
          loop={true}
          onMouseEnter={this.get_mouse}
          volume={this.props.muted ? 0 : 1}
          muted={this.props.muted}
          playbackRate={0.5}
          url={this.props.url}
          className="backgroundVideo"
          height="100%"
          width="100%"
        />
      </Fragment>
    )
  }
}

export default Video


// (function() {
//   var follower, init, mouseX, mouseY, positionElement, printout, timer

//   follower = document.getElementById('follower')

//   printout = document.getElementById('printout')

//   mouseX = event => {
//     return event.clientX
//   }

//   mouseY = event => {
//     return event.clientY
//   }

//   positionElement = event => {
//     var mouse
//     mouse = {
//       x: mouseX(event),
//       y: mouseY(event)
//     }
//     follower.style.top = mouse.y + 'px'
//     return (follower.style.left = mouse.x + 'px')
//   }

//   timer = false

//   window.onmousemove = init = event => {
//     var _event
//     _event = event
//     return (timer = setTimeout(() => {
//       return positionElement(_event)
//     }, 1))
//   }
// }).call(this)

// //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxlQUFBLEVBQUEsUUFBQSxFQUFBOztFQUFBLFFBQUEsR0FBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4Qjs7RUFDWCxRQUFBLEdBQVcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEI7O0VBRVgsTUFBQSxHQUFTLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDUCxXQUFPLEtBQUssQ0FBQztFQUROOztFQUdULE1BQUEsR0FBUyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQ1AsV0FBTyxLQUFLLENBQUM7RUFETjs7RUFHVCxlQUFBLEdBQWtCLENBQUMsS0FBRCxDQUFBLEdBQUE7QUFDaEIsUUFBQTtJQUFBLEtBQUEsR0FBUTtNQUNOLENBQUEsRUFBRyxNQUFBLENBQU8sS0FBUCxDQURHO01BRU4sQ0FBQSxFQUFHLE1BQUEsQ0FBTyxLQUFQO0lBRkc7SUFJUixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQWYsR0FBcUIsS0FBSyxDQUFDLENBQU4sR0FBVTtXQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLElBQWYsR0FBc0IsS0FBSyxDQUFDLENBQU4sR0FBVTtFQU5oQjs7RUFRbEIsS0FBQSxHQUFROztFQUNSLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLElBQUEsR0FBTyxDQUFDLEtBQUQsQ0FBQSxHQUFBO0FBQzFCLFFBQUE7SUFBQSxNQUFBLEdBQVM7V0FDVCxLQUFBLEdBQVEsVUFBQSxDQUFXLENBQUEsQ0FBQSxHQUFBO2FBQ2pCLGVBQUEsQ0FBZ0IsTUFBaEI7SUFEaUIsQ0FBWCxFQUVOLENBRk07RUFGa0I7QUFsQjVCIiwic291cmNlc0NvbnRlbnQiOlsiZm9sbG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sbG93ZXInKVxucHJpbnRvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRvdXQnKVxuXG5tb3VzZVggPSAoZXZlbnQpID0+XG4gIHJldHVybiBldmVudC5jbGllbnRYXG5cbm1vdXNlWSA9IChldmVudCkgPT5cbiAgcmV0dXJuIGV2ZW50LmNsaWVudFlcblxucG9zaXRpb25FbGVtZW50ID0gKGV2ZW50KSA9PlxuICBtb3VzZSA9IHtcbiAgICB4OiBtb3VzZVgoZXZlbnQpXG4gICAgeTogbW91c2VZKGV2ZW50KVxuICB9XG4gIGZvbGxvd2VyLnN0eWxlLnRvcCA9IG1vdXNlLnkgKyAncHgnXG4gIGZvbGxvd2VyLnN0eWxlLmxlZnQgPSBtb3VzZS54ICsgJ3B4J1xuXG50aW1lciA9IGZhbHNlXG53aW5kb3cub25tb3VzZW1vdmUgPSBpbml0ID0gKGV2ZW50KSA9PlxuICBfZXZlbnQgPSBldmVudFxuICB0aW1lciA9IHNldFRpbWVvdXQgPT5cbiAgICBwb3NpdGlvbkVsZW1lbnQoX2V2ZW50KVxuICAsIDEiXX0=
// //# sourceURL=coffeescript

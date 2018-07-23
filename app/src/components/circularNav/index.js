import React, {Component} from 'react'
import './_circularNav.scss'

export default class CircularNav extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.anchorAnimation()
  }

  anchorAnimation = (e) => {

    document.querySelector('.anchor_tab').classList.add('hide_anchor')
    document.getElementById('CircularNav').classList.add('animating')
    document.querySelector('.CircleMenu').classList.add('scale-out-ver-bottom')
    document.querySelector('.minor_anchor_tab').classList.add('show_minor_anchor')
  }

  anchorTabAnimation = (e) => {
    document.getElementById('developer_owner_operator').style.opacity = 0
    document.querySelector('.minor_anchor_tab').classList.add('scale-out-ver-bottom')
    document.querySelector('.minor_anchor_tab').classList.remove('show_minor_anchor')
    document.getElementById('CircularNav').classList.remove('animating')
    document.querySelector('.CircleMenu').classList.remove('scale-out-ver-bottom')
 
  }

  render() {
    return (
      <div id="CircularNav">
        <svg className="svg-defs" style={{ height: 0, position: 'absolute' }}>
          <defs>
            <mask id="RingSm" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
              <circle cx=".5" cy=".5" r=".32" fill="white" />
              <circle cx=".5" cy=".5" r=".23" fill="black" />
            </mask>
            <mask id="RingLg" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
              <circle cx=".5" cy=".5" r=".5" fill="white" />
              <circle cx=".5" cy=".5" r=".41" fill="black" />
            </mask>
            <symbol id="pic1">
              <image xlinkHref="/gallery/blueprint.jpg" width="500" height="500" />
            </symbol>
            <symbol id="pic2">
              <image xlinkHref="/gallery/kitchen_2.jpg" width="500" height="500" />
            </symbol>
            <symbol id="pic3">
              <image xlinkHref="/gallery/room.jpg" width="500" height="500" />
            </symbol>
          </defs>
        </svg>

        <div className="Cover">
          <TabAnchor anchorTabAnimation={this.anchorTabAnimation} />
          <div className="Cover-overlay">
            <nav className="CircleMenu">
              <Anchor anchorAnimation={this.anchorAnimation} />
              <ul className="CircleMenu-nav">
                <li>
                  <a className="CircleMenu-nav-itemIco anim-triggerCircleMenu" href="#">
                    <span className="u-vh">Home</span>
                    <svg className="Ico">
                      <use xlinkHref="#icoLogo" />
                    </svg>
                  </a>
                  <div className="CircleMenu-nav-itemImg">
                    <div className="u-responsiveSquare">
                      <svg viewBox="0 0 500 500">
                        <use className="u-svgMaskRingLg anim-shiftOut" xlinkHref="#pic2" />
                        <use className="u-svgMaskRingSm anim-shiftIn" xlinkHref="#pic2" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="anim-triggerCircleMenu" href="/process">
                    Process
                  </a>
                  <div className="CircleMenu-nav-itemImg">
                    <div className="u-responsiveSquare">
                      <svg viewBox="0 0 500 500">
                        <use className="u-svgMaskRingLg anim-shiftOut" xlinkHref="#pic1" />
                        <use className="u-svgMaskRingSm anim-shiftIn" xlinkHref="#pic1" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="anim-triggerCircleMenu" href="/portfolio">
                    Portfolio
                  </a>
                  <div className="CircleMenu-nav-itemImg">
                    <div className="u-responsiveSquare">
                      <svg viewBox="0 0 500 500">
                        <use className="u-svgMaskRingLg anim-shiftOut" xlinkHref="#pic3" />
                        <use className="u-svgMaskRingSm anim-shiftIn" xlinkHref="#pic3" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="anim-triggerCircleMenu" href="/gallery">
                    Gallery
                  </a>
                  <div className="CircleMenu-nav-itemImg">
                    <div className="u-responsiveSquare">
                      <svg viewBox="0 0 500 500">
                        <use className="u-svgMaskRingLg anim-shiftOut" xlinkHref="#pic2" />
                        <use className="u-svgMaskRingSm anim-shiftIn" xlinkHref="#pic2" />
                      </svg>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

const Anchor = props => (
  <div className="anchor_tab" onClick={props.anchorAnimation}>
    <img src="/icons/h.png" className="circle_nav__anchor" />
  </div>
)

const TabAnchor = props => (
  <div className="minor_anchor_tab" onClick={props.anchorTabAnimation}>
    <img src="/icons/h.png" className="minor_anchor_circle_nav__anchor" />
  </div>
)

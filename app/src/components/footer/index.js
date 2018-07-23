import React, { Component } from 'react'
import Glide, { Controls } from '@glidejs/glide'
import { Next, Prev } from '../icons'
import './glide.theme.css'
import './_footer.scss'

export default class Footer extends Component {
  componentDidMount() {
    new Glide('.glide', {
      perView: 3,
      focusAt: 'center',
      gap: 20,
      // autoplay: true,
      startAt: 1
    }).mount()
  }
  render() {
    return (
      <footer className="footer">
        <div className="footer_inner">
          <div className="glide">
            <div data-glide-el="track" className="glide__track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <div className="inner">
                    <div className="img_container">
                      <img src="/gallery/bp_1.jpg" alt="" />
                    </div>
                    <div className="view_process">
                      <div className="view_process_button">
                        <h4>View Process</h4>
                        </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="inner">
                    <div className="img_container">
                      <img src="/gallery/bp_1.jpg" alt="" />
                    </div>
                    <div className="view_process">
                      <div className="view_process_button">
                        <h4>View Process</h4>
                        </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="inner">
                    <div className="img_container">
                      <img src="/gallery/bp_1.jpg" alt="" />
                    </div>
                    <div className="view_process">
                      <div className="view_process_button">
                        <h4>View Process</h4>
                        </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="inner">
                    <div className="img_container">
                      <img src="/gallery/blueprint.jpg" alt="" />
                    </div>
                    <div className="view_process">
                      <div className="view_process_button">
                        <h4>View Process</h4>
                        </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="inner">
                    <div className="img_container">
                      <img src="/gallery/bp_3.jpg" alt="" />
                    </div>
                    <div className="view_process">
                      <div className="view_process_button">
                        <h4>View Process</h4>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                  <Prev />
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                  <Next />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

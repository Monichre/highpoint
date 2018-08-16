import React, {Fragment} from 'react'
import './_rn.scss'

export default props => {
  return (
    <section className={`right_nav`}>
      <div className='inner' style={{ position: 'relative' }}>
        <ul style={{ listStyle: 'none' }} className='top'>
          <li>
            <div id='contact-btn-container'>
              <Compass />
              <span className='text u-shadow'>
                <a href='mailto:info@highpointgroup.com'>Contact</a>
              </span>
            </div>
          </li>
        </ul>
        <ul style={{ listStyle: 'none' }} className='bottom'>
          <li>
            <span className=''>Developer</span>
          </li>
          <li>
            <span className=''>Owner</span>
          </li>
          <li>
            <span className=''>Operator</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

const Compass = () => (
  <svg width='48px' height='86px' viewBox='0 0 48 86' version='1.1'>
    <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='noun_Architecture_1883541' fill-rule='nonzero' fill='#000000'>
        <path
          d='M36.821,13.53 C33.187,12.89 29.615,15.065 28.503,18.592 C28.225,19.471 28.136,20.379 28.193,21.282 L30.605,17.526 L35.595,20.731 L41.521,20.973 L41.336,25.435 C41.902,24.729 42.351,23.933 42.628,23.052 C43.742,19.526 42.065,15.69 38.726,14.131 L39.043,13.451 L38.706,14.121 C38.436,13.985 38.138,13.866 37.795,13.758 C37.443,13.647 37.133,13.573 36.848,13.534 L36.951,12.791 L36.821,13.53 Z'
          id='Shape'
        />
        <rect
          id='Rectangle-path'
          transform='translate(37.170472, 42.962971) rotate(-177.667484) translate(-37.170472, -42.962971) '
          x='35.2274169'
          y='22.313381'
          width='3.886111'
          height='41.2991797'
        />
        <polygon id='Shape' points='35.947 72.797 38.016 65.165 34.512 65.022' />
        <path
          d='M41.304,7.693 L41.286,7.684 C40.861,7.472 40.404,7.29 39.891,7.129 C39.369,6.962 38.891,6.848 38.429,6.779 L38.365,6.769 C32.859,5.827 27.444,9.128 25.757,14.477 C24.79,17.534 25.168,20.764 26.764,23.509 L26.993,23.151 C26.543,21.501 26.555,19.778 27.074,18.139 C28.41,13.907 32.7,11.292 37.056,12.048 L37.056,12.047 C37.063,12.048 37.071,12.05 37.078,12.051 C37.08,12.052 37.081,12.052 37.083,12.052 C37.445,12.105 37.827,12.194 38.249,12.327 C38.662,12.458 39.025,12.603 39.362,12.771 L39.362,12.77 C39.366,12.772 39.371,12.775 39.375,12.777 C39.377,12.778 39.379,12.779 39.381,12.78 C43.385,14.663 45.397,19.267 44.059,23.502 C43.541,25.144 42.562,26.564 41.244,27.654 L41.226,28.08 C44.074,26.758 46.286,24.282 47.24,21.263 C48.936,15.899 46.383,10.065 41.304,7.693 Z'
          id='Shape'
        />
        <polygon id='Shape' points='5.402 63.149 11.042 57.611 8.092 55.715' />
        <polygon
          id='Shape'
          points='21.488 44.446 26.789 46.123 27.611 43.521 29.042 43.973 28.219 46.575 33.511 48.248 34.499 24.202'
        />
        <path
          d='M41.159,5.987 L42.746,0.962 L41.096,0.441 L39.508,5.464 C39.779,5.529 40.057,5.607 40.344,5.698 C40.628,5.789 40.898,5.884 41.159,5.987 Z'
          id='Shape'
        />
        <rect
          id='Rectangle-path'
          transform='translate(21.532942, 38.025953) rotate(122.703211) translate(-21.532942, -38.025953) '
          x='0.882463845'
          y='36.0829085'
          width='41.3009569'
          height='3.88609004'
        />
        <path
          d='M2.208,68.968 L0.757,69.345 C4.77,84.764 15.983,85.248 17.347,85.248 C17.429,85.248 17.475,85.246 17.482,85.246 L17.407,83.748 C16.957,83.768 6.146,84.089 2.208,68.968 Z'
          id='Shape'
        />
      </g>
    </g>
  </svg>
)

const Triangle = () => (
  <Fragment>
    <span className='line line01' />
    <span className='line line02' />
    <span className='line line03' />
  </Fragment>
)
const Image = () => (
  <img
    src='/icons/63.png'
    style={{
      height: '6vh',
      display: ' block',
      margin: '5px auto 0'
    }}
  />
)

import React from 'react'

export const Next = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-arrow-right'>
    <line x1='4' y1='12' x2='20' y2='12' />
    <polyline points='14 6 20 12 14 18' />
  </svg>
)

export const Prev = () => (
  <svg
    className='hover-icon'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-arrow-left'>
    <line x1='20' y1='12' x2='4' y2='12' />
    <polyline points='10 18 4 12 10 6' />
  </svg>
)

export const Mail = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-mail'>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
)

export const Phone = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-phone'>
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
  </svg>
)

export const Play = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-play'>
    <polygon points='5 3 19 12 5 21 5 3' />
  </svg>
)

export const Pause = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='#fff'
    stroke='currentColor'
    strokeWidth='1'
    strokeLinecap='round'
    stroke-linejoin='round'
    className='feather feather-pause'>
    <rect x='6' y='4' width='4' height='16' />
    <rect x='14' y='4' width='4' height='16' />
  </svg>
)

export const Info = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-info'>
    <circle cx='12' cy='12' r='10' />
    <line x1='12' y1='16' x2='12' y2='12' />
    <line x1='12' y1='8' x2='12' y2='8' />
  </svg>
)

export const ArrowsUp = props => (
  <button onClick={e => props.onClick(e)}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevrons-up'>
      <polyline points='17 11 12 6 7 11' />
      <polyline points='17 18 12 13 7 18' />
    </svg>
    <br />
    {/* <span style={{fontSize: '10px', position: 'absolute', width: 'max-content', bottom: '-15px', left: '-10px'}}>Back To Top</span> */}
  </button>
)

export const CardArrowDown = ({ onClick, index }) => (
  <button onClick={e => onClick(e, index)}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevrons-down'>
      <polyline points='7 13 12 18 17 13' />
      <polyline points='7 6 12 11 17 6' />
    </svg>
  </button>
)

export const PageArrowDown = ({ onClick }) => (
  <button onClick={e => onClick(e)}>
    <svg
      width='90px'
      height='54px'
      viewBox='0 0 90 54'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g
          id='noun_Arrow_991520'
          transform='translate(45.000000, 27.000000) rotate(90.000000) translate(-45.000000, -27.000000) translate(18.000000, -18.000000)'>
          <g id='Group'>
            <path
              d='M2.307,0.989 L31.522,44.636 C31.633,44.802 31.634,45.019 31.522,45.186 L2.305,89.011 L22.795,89.011 L52.026,44.912 L22.795,0.989 L2.307,0.989 Z'
              id='Shape'
            />
            <path
              d='M53.03,44.637 L23.472,0.22 C23.38,0.083 23.226,0 23.06,0 L1.381,0 C1.198,0 1.031,0.1 0.945,0.262 C0.859,0.423 0.869,0.618 0.97,0.77 L30.517,44.912 L0.97,89.231 C0.869,89.383 0.859,89.578 0.945,89.739 C1.031,89.9 1.199,90 1.381,90 L23.06,90 C23.226,90 23.381,89.917 23.472,89.779 L53.031,45.185 C53.141,45.018 53.141,44.803 53.03,44.637 Z M22.795,89.011 L2.305,89.011 L31.523,45.185 C31.634,45.019 31.634,44.802 31.523,44.635 L2.307,0.989 L22.795,0.989 L52.025,44.912 L22.795,89.011 Z'
              id='Shape'
              fill='#000000'
              fill-rule='nonzero'
            />
          </g>
        </g>
      </g>
    </svg>
  </button>
)

export const Close = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-x-circle'>
    <circle cx='12' cy='12' r='10' />
    <line x1='15' y1='9' x2='9' y2='15' />
    <line x1='9' y1='9' x2='15' y2='15' />
  </svg>
)

export const ArrowPrev = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-chevron-left'>
    <polyline points='15 18 9 12 15 6' />
  </svg>
)

export const ArrowNext = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-chevron-right'>
    <polyline points='9 18 15 12 9 6' />
  </svg>
)

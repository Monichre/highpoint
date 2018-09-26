import React from "react";

export const Next = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

export const Prev = () => (
  <svg
    className="hover-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-left"
  >
    <line x1="20" y1="12" x2="4" y2="12" />
    <polyline points="10 18 4 12 10 6" />
  </svg>
);

export const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-mail"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const Phone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-phone"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-pause"
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-info"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </svg>
);

export const ArrowsUp = props => (
  <button onClick={e => props.onClick(e)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevrons-up"
    >
      <polyline points="17 11 12 6 7 11" />
      <polyline points="17 18 12 13 7 18" />
    </svg>
    <br />
    {/* <span style={{fontSize: '10px', position: 'absolute', width: 'max-content', bottom: '-15px', left: '-10px'}}>Back To Top</span> */}
  </button>
);

export const CardArrowDown = ({ onClick, index }) => (
  <button onClick={e => onClick(e, index)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevrons-down"
    >
      <polyline points="7 13 12 18 17 13" />
      <polyline points="7 6 12 11 17 6" />
    </svg>
  </button>
);

export const PageArrowDown = () => (
  <button>
    <svg
      width="90px"
      height="54px"
      viewBox="0 0 90 54"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="noun_Arrow_991520"
          transform="translate(45.000000, 27.000000) rotate(90.000000) translate(-45.000000, -27.000000) translate(18.000000, -18.000000)"
        >
          <g id="Group">
            <path
              d="M2.307,0.989 L31.522,44.636 C31.633,44.802 31.634,45.019 31.522,45.186 L2.305,89.011 L22.795,89.011 L52.026,44.912 L22.795,0.989 L2.307,0.989 Z"
              id="Shape"
            />
            <path
              d="M53.03,44.637 L23.472,0.22 C23.38,0.083 23.226,0 23.06,0 L1.381,0 C1.198,0 1.031,0.1 0.945,0.262 C0.859,0.423 0.869,0.618 0.97,0.77 L30.517,44.912 L0.97,89.231 C0.869,89.383 0.859,89.578 0.945,89.739 C1.031,89.9 1.199,90 1.381,90 L23.06,90 C23.226,90 23.381,89.917 23.472,89.779 L53.031,45.185 C53.141,45.018 53.141,44.803 53.03,44.637 Z M22.795,89.011 L2.305,89.011 L31.523,45.185 C31.634,45.019 31.634,44.802 31.523,44.635 L2.307,0.989 L22.795,0.989 L52.025,44.912 L22.795,89.011 Z"
              id="Shape"
              fill="#000000"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  </button>
);

export const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x-circle"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export const ArrowPrev = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-left"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ArrowNext = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-right"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const CompassRuler = () => (
  <svg
    width="90px"
    height="80px"
    viewBox="0 0 90 80"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="noun_Architecture_795297" fill-rule="nonzero" fill="#000000">
        <g id="Group" transform="translate(0.000000, 0.637840)">
          <path
            d="M45,0.11193 C42.7670679,0.111765539 40.6255457,0.998731247 39.0466376,2.57766601 C37.4677295,4.15660077 36.5807999,6.29813789 36.581002,8.53107 C36.5808635,10.7639605 37.4678212,12.905436 39.0467225,14.4843188 C40.6256237,16.0632017 42.7671095,16.9501345 45,16.94997 C47.2328905,16.9501345 49.3743763,16.0632017 50.9532775,14.4843188 C52.5321788,12.905436 53.4191365,10.7639605 53.418998,8.53107 C53.4192001,6.29813789 52.5322705,4.15660077 50.9533624,2.57766601 C49.3744543,0.998731247 47.2329321,0.111765539 45,0.11193 L45,0.11193 Z M38.27854,16.25618 L18.814922,69.7274 C17.906309,72.2239 17.781949,72.7144 18.059678,74.3159 C18.561221,76.6335 19.0982,78.4528 19.49915,78.5986 C19.9001,78.7457 21.478235,77.6966 23.351129,76.2429 C24.593281,75.1947 24.812447,74.7381 25.721059,72.2417 L45,19.2773 L64.27894,72.2417 C65.18755,74.7381 65.40672,75.1947 66.64887,76.2429 C68.52286,77.6959 70.10467,78.7448 70.50557,78.5986 C70.90652,78.4516 71.43989,76.633 71.94032,74.3159 C72.21791,72.7144 72.09355,72.2239 71.18508,69.7274 L51.726204,16.26828 C50.7780466,17.0921767 49.686652,17.7349531 48.506319,18.16463 C47.3391888,18.5851258 46.1054713,18.7904586 44.865061,18.77066 C43.7152469,18.7590064 42.5755724,18.5541416 41.493681,18.16463 C40.3141195,17.7307806 39.2243125,17.0838907 38.27854,16.25618 L38.27854,16.25618 Z M11.14168,18.35178 L0,29.49585 L7.959698,37.4553 L10.559278,34.85355 L11.861416,36.15313 L9.259465,38.7554 L17.219187,46.7151 L22.425415,41.5111 L23.725205,42.8109 L18.521349,48.0172 L23.095459,52.5913 L29.042747,36.25251 L11.14168,18.35178 L11.14168,18.35178 Z M78.85832,18.35378 L60.95965,36.25499 L66.90454,52.5911 L71.47865,48.0171 L68.8791,45.4149 L70.17886,44.1129 L72.78081,46.7149 L80.74049,38.7552 L75.53663,33.55124 L76.83642,32.24905 L82.0403,37.4552 L90,29.49572 L78.85832,18.35378 L78.85832,18.35378 Z M37.646375,44.8563 L31.699111,61.1946 L33.85832,63.354 L35.740535,65.2361 L40.944368,60.0321 L42.246553,61.3321 L37.040302,66.5359 L45,74.4956 L52.959698,66.5359 L50.357747,63.9363 L51.657537,62.6341 L54.259465,65.2361 L56.144052,63.3516 L58.300889,61.1946 L52.355973,44.8587 L45.002372,52.2121 L37.646375,44.8563 L37.646375,44.8563 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const MobileMenuLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 269.51"
    className="mobile_logo"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="black">
        <path d="M226.55,240.58v28h-3.88V209.7H234c9.62,0,17.2,5.29,17.2,15.35,0,9.79-7,15.53-17.11,15.53Zm0-3.53h7.76c7.67,0,12.88-4.5,12.88-11.91s-4.94-11.91-13.49-11.91h-7.15Z" />
        <path d="M295.81,268.54l-19.06-27.79H275v27.79h-3.88V209.7h8.47c4.5,0,8.56.35,12.44,3,4.59,3.18,6.09,8,6.09,12.61,0,5.82-2.56,11.82-9.88,14.29a22.54,22.54,0,0,1-7.23,1.15l19.23,27.79ZM275,237.22h5.65c8.38,0,13.41-4.41,13.41-12,0-5.91-2.91-9-5.2-10.23-2.47-1.41-6.7-1.76-9-1.76H275Z" />
        <path d="M378.39,239.25a30,30,0,0,1-30.52,30.26c-17.29,0-30.52-13.32-30.52-30.26a30.52,30.52,0,0,1,61,0Zm-4.06,0c0-15.09-11.29-26.82-26.46-26.82s-26.47,11.73-26.47,26.82S332.69,266,347.87,266,374.33,254.25,374.33,239.25Z" />
        <path d="M404.08,240.58v28H400.2V209.7h11.38c9.62,0,17.2,5.29,17.2,15.35,0,9.79-7,15.53-17.11,15.53Zm0-3.53h7.76c7.67,0,12.88-4.5,12.88-11.91s-4.94-11.91-13.5-11.91h-7.15Z" />
        <path d="M476.86,213.23H452.52v21.35h23.82v3.53H452.52V265h24.34v3.53H448.64V209.7h28.23Z" />
        <path d="M523.37,268.54l-19.06-27.79h-1.76v27.79h-3.88V209.7h8.47c4.5,0,8.56.35,12.44,3,4.59,3.18,6.09,8,6.09,12.61,0,5.82-2.56,11.82-9.88,14.29a22.54,22.54,0,0,1-7.23,1.15l19.23,27.79Zm-20.82-31.32h5.65c8.38,0,13.41-4.41,13.41-12,0-5.91-2.91-9-5.2-10.23-2.47-1.41-6.7-1.76-9-1.76h-4.85Z" />
        <path d="M558.75,213.23v55.31h-3.88V213.23H539.61V209.7H574v3.53Z" />
        <path d="M605.78,243.4l-19.32-33.7h4.41l16.94,29.73L625.1,209.7h4.41l-19.85,33.7v25.14h-3.88Z" />
        <path d="M708.13,240.31h24.7c0,5.38-1.14,13.14-6,19.32-5.2,6.62-13.15,9.88-22.14,9.88-17.29,0-30.43-12.7-30.43-30.26s13.58-30.34,30.7-30.34a28.55,28.55,0,0,1,18.44,6.35,33.76,33.76,0,0,1,7.06,7.41l-3.09,2.47a27,27,0,0,0-5.65-6.53,26.44,26.44,0,0,0-16.85-6.18c-15.08,0-26.55,12-26.55,27,0,14.73,11.12,26.55,26.29,26.55,10.06,0,17.29-5.12,20.47-10a26.35,26.35,0,0,0,3.88-12.17H708.13Z" />
        <path d="M779.34,268.54l-19.06-27.79h-1.76v27.79h-3.88V209.7h8.47c4.5,0,8.56.35,12.44,3,4.59,3.18,6.09,8,6.09,12.61,0,5.82-2.56,11.82-9.88,14.29a22.54,22.54,0,0,1-7.23,1.15l19.23,27.79Zm-20.82-31.32h5.65c8.38,0,13.41-4.41,13.41-12,0-5.91-2.91-9-5.2-10.23-2.47-1.41-6.7-1.76-9-1.76h-4.85Z" />
        <path d="M861.92,239.25a30,30,0,0,1-30.52,30.26c-17.29,0-30.52-13.32-30.52-30.26a30.52,30.52,0,0,1,61,0Zm-4.06,0c0-15.09-11.29-26.82-26.47-26.82s-26.46,11.73-26.46,26.82S816.22,266,831.39,266,857.86,254.25,857.86,239.25Z" />
        <path d="M887.61,209.7v36.79c0,5.56.26,9.17,2.47,12.7,3.44,5.56,9.88,6.79,13.67,6.79s10.23-1.24,13.67-6.79c2.21-3.53,2.47-7.15,2.47-12.7V209.7h3.88v36.79c0,6.44-.35,10.67-3.35,15.08C916,268,909,269.51,903.75,269.51s-12.26-1.5-16.67-7.94c-3-4.41-3.35-8.64-3.35-15.08V209.7Z" />
        <path d="M952.63,240.58v28h-3.88V209.7h11.38c9.62,0,17.2,5.29,17.2,15.35,0,9.79-7,15.53-17.11,15.53Zm0-3.53h7.76c7.67,0,12.88-4.5,12.88-11.91s-4.94-11.91-13.49-11.91h-7.15Z" />
        <path d="M0,140.37H18.49V4.73H0V1.5H63.41V4.73H44.71V70.51h70.51V4.73H96.73V1.5h63.41V4.73h-18.7V140.37h18.7v3.22H96.73v-3.22h18.49V73.73H44.71v66.64h18.7v3.22H0Z" />
        <path d="M173.67,140.37h18.49V4.73H173.67V1.5h63.41V4.73h-18.7V140.37h18.7v3.22H173.67Z" />
        <path d="M367.55,143.59c-.64-1.29-3.22-8.17-8.6-9.89-7.31,6-19.13,11.39-40.63,11.39-39.55,0-66.85-28.16-66.85-72.65C251.48,29,278.13,0,321.12,0c13.33,0,25.15,4.08,33.54,11.82,6.23,0,9.46-2.36,12.47-10.32h2.8c-1.08,3.87-4.09,22.14-4.09,31V45.78h-3.22V37.62c0-20.42-17.2-34.39-41.49-34.39-32.24,0-41.49,30.31-41.49,70.72,0,41.92,10.75,67.93,38.48,67.93,14.18,0,28.8-6.45,28.8-23.65V88.13H326.28V84.91h57.18v3.22H370.78v55.46Z" />
        <path d="M393.55,140.37H412V4.73H393.55V1.5H457V4.73h-18.7V70.51h70.51V4.73H490.28V1.5h63.41V4.73H535V140.37h18.7v3.22H490.28v-3.22h18.49V73.73H438.26v66.64H457v3.22H393.55Z" />
        <path d="M567.22,169.39H585.7V33.75H567.22V30.52h59.54c43.85,0,57.61,18.06,57.61,40.63,0,26-20,43-50.94,43a54.73,54.73,0,0,1-8-.43v-3.22a51.6,51.6,0,0,0,6.45.43c18.06,0,24.72-16.33,24.72-39.12,0-24.07-6.45-38-30.09-38H611.93V169.39h20.63v3.22H567.22Z" />
        <path d="M700,99.74c0-43,20.21-70.72,67.28-70.72,46.86,0,67.06,27.73,67.06,70.72,0,41.92-18.27,74.38-67.06,74.38C718.32,174.11,700,141.65,700,99.74Zm106.19,2.37c0-40-5.37-70.29-39.12-70.29-33.53,0-38.91,30.31-38.91,70.29,0,36.54,6,69.22,38.91,69.22C800.22,171.32,806.24,138.65,806.24,102.1Z" />
        <path d="M849.64,169.39h18.49V33.75H849.64V30.52h63.41v3.23h-18.7V169.39h18.7v3.22H849.64Z" />
        <path d="M927,169.39h6.45c9.46,0,12.9-4.73,12.9-12.9V45.14l-1.07-1.51c-4.3-6-7.52-9.89-16.55-9.89h-3.87V30.52h42.56L1045,133.7V46.64c0-8.17-3.44-12.9-12.9-12.9h-6.45V30.52h41.92v3.23h-6.66c-9.46,0-12.68,4.73-12.68,12.9V173.47h-5.8l-92.86-124V156.49c0,8.17,3.23,12.9,12.68,12.9h6.67v3.22H927Z" />
        <path d="M1107.14,169.39h18.49V33.75H1099.4c-11,0-15.48,5.8-17.19,21.49l-1.72,15.48h-3.22s1.29-19.34,1.29-26.65V30.52h120.59V44.06c0,7.31.86,26.65.86,26.65h-3.23l-1.5-15.91c-1.29-14.62-5.38-21.06-16.55-21.06h-26.87V169.39h18.7v3.22h-63.41Z" />
        <rect y="169.39" width="553.69" height="3.22" />
        <rect x="567.22" y="1.5" width="631.92" height="3.23" />
      </g>
    </g>
  </svg>
);

export const EllipsesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-more-vertical"
  >
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="12" cy="20" r="2" />
  </svg>
);

export const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-layout"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

export const MonitorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-monitor"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const LoaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-loader"
  >
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
);

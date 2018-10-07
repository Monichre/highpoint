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
  </button>
);

export const CardArrowDown = () => (
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

export const Close = ({ color = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={`${color || "currentColor"}`}
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

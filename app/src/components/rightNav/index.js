import React from 'react'
import {Mail, Phone} from '../icons'
import HorizontalLogo from '../horizontalLogo'
import DotMenu from '../dotMenu'
import './_rn.scss'

// export default () => (
//   <section className="right_nav" >
//     <div className="inner" style={{ position: 'relative' }}>
//       <ul style={{listStyle: 'none'}}>
//         <li style={{fontSize: '10px'}}>
//         info@highpointpg.com | <img src='/logos/horizontal.svg' style={{width: '80px',
//     verticalAlign: '-webkit-baseline-middle'
//  }}/> | 612-239-8433 
//         </li>
//       </ul>
//     </div>
//   </section>
// )

export default () => <DotMenu positionRight={true} />
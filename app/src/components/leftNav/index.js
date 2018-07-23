import React from 'react'
import AnimatedMenu from '../animatedMenu'
import DotMenu from '../dotMenu'

import './_ln.scss'

// export default () => (
//   <section className="left_nav">
//     <div className="inner">
//       <ul>
//         <li className="menu_link">
//         Developer | Owner | Operator 
//         </li>
//       </ul>
//     </div>
//   </section>


//   )

  export default (props) => <DotMenu {...props} />
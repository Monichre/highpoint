// import React, {Component} from 'react'
// import { Keyframes, animated, config } from 'react-spring'
// import { sleep } from '../../utils'

// const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

// // Creates a spring with predefined animation slots
// const Sidebar = Keyframes.Spring({
//   // Slots can take arrays/chains,
//   peek: [
//     { delay: 500, from: { x: 200 }, to: { x: 0 }, config: fast },
//     { delay: 800, to: { x: 200 }, config: config.slow }
//   ],
//   // single items,
//   open: { to: { x: 0 }, config: config.default },
//   // or async functions with side-effects
//   close: async call => {
//     await sleep(400)
//     await call({ to: { x: 200 }, config: config.gentle })
//   }
// })

// // Creates a keyframed trail
// const Content = Keyframes.Trail({
//   peek: [{ delay: 600, from: { x: 200, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: 200, opacity: 0 } }],
//   open: { delay: 100, to: { x: 0, opacity: 1 } },
//   close: { to: { x: 200, opacity: 0 } }
// })

// const items = [
//   <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
//   <input placeholder="Username" />,
//   <input placeholder="Username" />,
//   <Fragment>
//     <h5>Remember me</h5>
//     <a className="login-form-forgot" href="#" children="Forgot password" />
//     <button type="primary" htmlType="submit" className="login-form-button" children="Log in">
//     Or <a href="#">register now!</a>
//     </button>
//   </Fragment>
// ]

// export default class PortfolioSideBar extends Component {
//   state = { open: undefined }
//   toggle = () => this.setState(state => ({ open: !state.open }))
//   render() {
//     const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
//     const icon = this.state.open ? 'fold' : 'unfold'
//     return (
//       <Fragment>
//         <Icon type={`menu-${icon}`} className="toggle" onClick={this.toggle} />
//         <Sidebar native state={state}>
//           {({ x }) => (
//             <animated.div className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
//               <Content native keys={items.map((_, i) => i)} config={{ tension: 200, friction: 20 }} state={state}>
//                 {items.map((item, i) => ({ x, ...props }) => (
//                   <animated.div
//                     style={{
//                       transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
//                       ...props
//                     }}>
//                     <Form.Item className={i === 0 ? 'middle' : ''}>{item}</Form.Item>
//                   </animated.div>
//                 ))}
//               </Content>
//             </animated.div>
//           )}
//         </Sidebar>
//       </Fragment>
//     )
//   }
// }

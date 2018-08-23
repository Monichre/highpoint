
import { Keyframes } from 'react-spring'

export const Content = Keyframes.Trail({
  peek: [{ delay: 600, from: { x: 200, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: 200, opacity: 0 } }],
  open: { delay: 100, to: { x: 0, opacity: 1 } },
  close: { to: { x: 200, opacity: 0 } }
})

import { Dispatcher } from 'flux'
import { getStore } from '../actions'

const AppDispatcher = new Dispatcher()

AppDispatcher.register(payload => {
  let action = payload.action

  switch (action) {
    case 'get-app-store':
      getStore()
      break

    default:
      return true
  }

  return true
})

export default AppDispatcher

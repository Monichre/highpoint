import { Dispatcher } from 'flux'
import { getStore, goToPropertyCard } from '../actions'

const AppDispatcher = new Dispatcher()

AppDispatcher.register(payload => {
  const {action, propertyId} = payload

  switch (action) {
    case 'get-app-store':
      getStore()
      break

    case 'go-to-property-card':
      goToPropertyCard(propertyId)
      break

    default:
      return true
  }

  return true
})

export default AppDispatcher

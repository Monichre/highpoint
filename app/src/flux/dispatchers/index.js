import { Dispatcher } from "flux";
import {
  getStore,
  goToPropertyCard,
  launchPropertySideBar,
  setActiveMenuItem
} from "../actions";

const AppDispatcher = new Dispatcher();

AppDispatcher.register(payload => {
  const { action, propertyId, menuItemIndex } = payload;

  switch (action) {
    case "get-app-store":
      getStore();
      break;

    case "go-to-property-card":
      goToPropertyCard(propertyId);
      break;

    case "launch-sidebar":
      launchPropertySideBar(propertyId);
      break;

    case "set-active-menu-item":
      setActiveMenuItem(menuItemIndex);
      break;

    default:
      return true;
  }

  return true;
});

export default AppDispatcher;

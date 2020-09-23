import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps107676Navigator from '../features/Maps107676/navigator';
import Settings107654Navigator from '../features/Settings107654/navigator';
import Settings107639Navigator from '../features/Settings107639/navigator';
import NotificationList107638Navigator from '../features/NotificationList107638/navigator';
import Maps107637Navigator from '../features/Maps107637/navigator';
import UserProfile107636Navigator from '../features/UserProfile107636/navigator';
import Maps107617Navigator from '../features/Maps107617/navigator';
import Settings107595Navigator from '../features/Settings107595/navigator';
import Settings107580Navigator from '../features/Settings107580/navigator';
import NotificationList107579Navigator from '../features/NotificationList107579/navigator';
import Maps107578Navigator from '../features/Maps107578/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps107676: { screen: Maps107676Navigator },
Settings107654: { screen: Settings107654Navigator },
Settings107639: { screen: Settings107639Navigator },
NotificationList107638: { screen: NotificationList107638Navigator },
Maps107637: { screen: Maps107637Navigator },
UserProfile107636: { screen: UserProfile107636Navigator },
Maps107617: { screen: Maps107617Navigator },
Settings107595: { screen: Settings107595Navigator },
Settings107580: { screen: Settings107580Navigator },
NotificationList107579: { screen: NotificationList107579Navigator },
Maps107578: { screen: Maps107578Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

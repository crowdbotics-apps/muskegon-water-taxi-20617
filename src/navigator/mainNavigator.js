import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen50107881Navigator from '../features/BlankScreen50107881/navigator';
import Settings107866Navigator from '../features/Settings107866/navigator';
import UserProfile107815Navigator from '../features/UserProfile107815/navigator';
import Maps107796Navigator from '../features/Maps107796/navigator';
import Settings107774Navigator from '../features/Settings107774/navigator';
import Settings107759Navigator from '../features/Settings107759/navigator';
import NotificationList107758Navigator from '../features/NotificationList107758/navigator';
import Maps107757Navigator from '../features/Maps107757/navigator';
import UserProfile107754Navigator from '../features/UserProfile107754/navigator';
import Maps107735Navigator from '../features/Maps107735/navigator';
import Settings107713Navigator from '../features/Settings107713/navigator';
import Settings107698Navigator from '../features/Settings107698/navigator';
import NotificationList107697Navigator from '../features/NotificationList107697/navigator';
import Maps107696Navigator from '../features/Maps107696/navigator';
import UserProfile107695Navigator from '../features/UserProfile107695/navigator';
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
BlankScreen50107881: { screen: BlankScreen50107881Navigator },
Settings107866: { screen: Settings107866Navigator },
UserProfile107815: { screen: UserProfile107815Navigator },
Maps107796: { screen: Maps107796Navigator },
Settings107774: { screen: Settings107774Navigator },
Settings107759: { screen: Settings107759Navigator },
NotificationList107758: { screen: NotificationList107758Navigator },
Maps107757: { screen: Maps107757Navigator },
UserProfile107754: { screen: UserProfile107754Navigator },
Maps107735: { screen: Maps107735Navigator },
Settings107713: { screen: Settings107713Navigator },
Settings107698: { screen: Settings107698Navigator },
NotificationList107697: { screen: NotificationList107697Navigator },
Maps107696: { screen: Maps107696Navigator },
UserProfile107695: { screen: UserProfile107695Navigator },
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

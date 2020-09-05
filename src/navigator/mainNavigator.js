import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings97784Navigator from '../features/Settings97784/navigator';
import NotificationList97783Navigator from '../features/NotificationList97783/navigator';
import Maps97782Navigator from '../features/Maps97782/navigator';
import ArticleList197781Navigator from '../features/ArticleList197781/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings97784: { screen: Settings97784Navigator },
NotificationList97783: { screen: NotificationList97783Navigator },
Maps97782: { screen: Maps97782Navigator },
ArticleList197781: { screen: ArticleList197781Navigator },

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

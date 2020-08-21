import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Lists from "./src/screens/lists";
import ImagesComponent from './src/screens/images';
import ImagesBackground from './src/screens/imageBackground';
import Modals from './src/screens/modals';
import PressableComponent from './src/screens/pressable.js';
import Refresher from './src/screens/refresher';
import ScrollComp from './src/screens/scrollable';
import Status from './src/screens/statusBars';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: Lists,
    Images: ImagesComponent,
    ImageBack: ImagesBackground,
    Modal: Modals,
    PressableComp: PressableComponent,
    Refresh: Refresher,
    Scroll: ScrollComp,
    Status: Status,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native Components"
    }
  }
);

export default createAppContainer(navigator);

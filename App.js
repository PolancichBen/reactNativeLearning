import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Lists from "./src/screens/lists";
import ImagesComponent from './src/screens/images';
import ImagesBackground from './src/screens/imageBackground';
import Modals from './src/screens/modals';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: Lists,
    Images: ImagesComponent,
    ImageBack: ImagesBackground,
    Modal: Modals
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

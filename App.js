import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Lists from "./src/screens/lists";
import ImagesComponent from './src/screens'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: Lists,
    Images: ImagesComponent
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

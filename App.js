import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Lists from "./src/screens/lists";
import ImagesComponent from './src/screens/images';
import ImagesBackground from './src/screens/imageBackground';
import ActivityIndicatorComponent from './src/screens/activityIndicator';
import Modals from './src/screens/modals';
import PressableComponent from './src/screens/pressable.js';
import Refresher from './src/screens/refresher';
import ScrollComp from './src/screens/scrollable';
import Status from './src/screens/statusBars';
import Switches from './src/screens/switch';
import TextInputting from './src/screens/textInput';
import TouchableHighlightExample from './src/screens/touchableHighlight';
import TouchableOpacityComponent from './src/screens/touchableOpacity';
import TouchableWithoutFeedbackComponent from './src/screens/touchableWithoutFeedback';
import VirtualizedListExample from './src/screens/virtualizedListComponent';

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
    Switch: Switches,
    TextInput: TextInputting,
    TouchableHighlight: TouchableHighlightExample,
    TouchableOpacityComponent: TouchableOpacityComponent,
    TouchableWithoutFeedbackComponent: TouchableWithoutFeedbackComponent,
    VirtualizedListExample: VirtualizedListExample,
    ActivityIndicatorComponent: ActivityIndicatorComponent,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native Components"
    }
  }
);

export default createAppContainer(navigator);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ColorAdjusterScreen } from "./src/screens/ColorAdjusterScreen";
import { ColorScreen } from "./src/screens/ColorScreen";
import { ComponentsScreen } from "./src/screens/ComponentsScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import { InputScreen } from "./src/screens/InputScreen";
import { ListScreen } from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorAdjuster: ColorAdjusterScreen,
    Input: InputScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

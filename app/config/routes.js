import { createStackNavigator } from "react-navigation";

import HomeContainer from '../containers/HomeContainer';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeContainer
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default RootStack;

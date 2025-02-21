import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitScreen from "@screens/init";
import AuthStackNavigation from "./AuthStackNavigation";
import MainTabsNavigation from "./MainTabsNavigation";

export type RootStackParamList = {
  AuthStack: undefined;
  MainTabs: undefined;
  InitScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen component={InitScreen} name="InitScreen" />
        <RootStack.Screen component={AuthStackNavigation} name="AuthStack" />
        <RootStack.Screen component={MainTabsNavigation} name="MainTabs" />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

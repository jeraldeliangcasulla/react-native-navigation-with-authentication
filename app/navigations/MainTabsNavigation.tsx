import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "@screens/main/dashboard";
import ProfileScreen from "@screens/main/profile";

export type MainTabsParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

const MainTabs = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabsNavigation() {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen component={DashboardScreen} name="Dashboard" />
      <MainTabs.Screen component={ProfileScreen} name="Profile" />
    </MainTabs.Navigator>
  );
}

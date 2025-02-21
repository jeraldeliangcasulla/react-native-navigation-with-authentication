import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login";
import WelcomeScreen from "../screens/auth/welcome";
import SignupScreen from "../screens/auth/signup";

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigation() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen component={WelcomeScreen} name="Welcome" />
      <AuthStack.Screen component={LoginScreen} name="Login" />
      <AuthStack.Screen component={SignupScreen} name="Signup" />
    </AuthStack.Navigator>
  );
}

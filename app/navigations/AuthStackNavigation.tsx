import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@screens/auth/login";
import SignupScreen from "@screens/auth/signup";
import WelcomeScreen from "@screens/auth/welcome";

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

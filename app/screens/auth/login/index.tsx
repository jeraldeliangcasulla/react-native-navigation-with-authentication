import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text } from "react-native";
import { AuthStackParamList } from "../../../navigations/AuthStackNavigation";
import PageLayout from "../../../components/PageLayout";
import { useLocalContext } from "../../../context";
import { CommonActions } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigations/RootStackNavigation";

export default function LoginScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, "Login">) {
  const { login } = useLocalContext();

  function onLogin() {
    login();

    const successLogin = true;
    if (successLogin) {
      const rootNav = navigation.getParent();
      const target: keyof RootStackParamList = "MainTabs";

      if (rootNav) {
        rootNav.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: target }],
          })
        );
      }
    }
  }

  return (
    <PageLayout>
      <Text>LoginScreen</Text>
      <Button title="login" onPress={onLogin} />
    </PageLayout>
  );
}

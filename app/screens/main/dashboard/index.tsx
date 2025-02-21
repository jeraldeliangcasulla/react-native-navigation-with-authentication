import PageLayout from "@components/PageLayout";
import { useLocalContext } from "@context/index";
import { MainTabsParamList } from "@navigations/MainTabsNavigation";
import { RootStackParamList } from "@navigations/RootStackNavigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { Button, Text } from "react-native";

export default function DashboardScreen({
  navigation,
}: BottomTabScreenProps<MainTabsParamList, "Dashboard">) {
  const { logout } = useLocalContext();
  function onLogout() {
    logout();

    const target: keyof RootStackParamList = "AuthStack";

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: target,
            params: {
              screen: "Login",
            },
          },
        ],
      })
    );
  }
  return (
    <PageLayout>
      <Text>DashboardScreen</Text>
      <Button title="logout" onPress={onLogout} />
    </PageLayout>
  );
}

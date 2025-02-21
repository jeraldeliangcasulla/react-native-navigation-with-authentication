import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Button, Text } from "react-native";
import { MainTabsParamList } from "../../../navigations/MainTabsNavigation";
import PageLayout from "../../../components/PageLayout";

export default function DashboardScreen({
  navigation,
}: BottomTabScreenProps<MainTabsParamList, "Dashboard">) {
  return (
    <PageLayout>
      <Text>DashboardScreen</Text>
      <Button title="navigation" />
    </PageLayout>
  );
}

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { MainTabsParamList } from "../../../navigations/MainTabsNavigation";
import PageLayout from "../../../components/PageLayout";

export default function ProfileScreen({
  navigation,
}: BottomTabScreenProps<MainTabsParamList, "Profile">) {
  return (
    <PageLayout>
      <Text>ProfileScreen</Text>
    </PageLayout>
  );
}

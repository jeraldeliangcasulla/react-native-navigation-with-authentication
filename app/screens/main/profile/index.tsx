import PageLayout from "@components/PageLayout";
import { MainTabsParamList } from "@navigations/MainTabsNavigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

export default function ProfileScreen({
  navigation,
}: BottomTabScreenProps<MainTabsParamList, "Profile">) {
  return (
    <PageLayout>
      <Text>ProfileScreen</Text>
    </PageLayout>
  );
}

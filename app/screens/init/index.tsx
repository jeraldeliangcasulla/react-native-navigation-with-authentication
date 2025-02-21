import PageLayout from "@components/PageLayout";
import { useLocalContext } from "@context/index";
import { RootStackParamList } from "@navigations/RootStackNavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { Text } from "react-native";

export default function InitScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "InitScreen">) {
  const { isAuthenticated } = useLocalContext();

  useEffect(() => {
    const targetScreen = isAuthenticated ? "MainTabs" : "AuthStack";

    navigation.replace(targetScreen);
  }, [isAuthenticated]);
  return (
    <PageLayout>
      <Text>Loading...</Text>
    </PageLayout>
  );
}

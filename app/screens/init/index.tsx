import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../../navigations/RootStackNavigation";
import PageLayout from "../../components/PageLayout";
import { useLocalContext } from "../../context";

export default function InitScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "InitScreen">) {
  const { isAuthenticated } = useLocalContext();

  useEffect(() => {
    const targetScreen = isAuthenticated ? "MainTabs" : "AuthStack";
    console.log(targetScreen);

    navigation.replace(targetScreen);
  }, [isAuthenticated]);
  return (
    <PageLayout>
      <Text>Loading...</Text>
    </PageLayout>
  );
}

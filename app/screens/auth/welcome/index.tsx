import PageLayout from "@components/PageLayout";
import { AuthStackParamList } from "@navigations/AuthStackNavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text } from "react-native";

export default function WelcomeScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, "Welcome">) {
  return (
    <PageLayout>
      <Text>WelcomeScreen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Go to signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </PageLayout>
  );
}

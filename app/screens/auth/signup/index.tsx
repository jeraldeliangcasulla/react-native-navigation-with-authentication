import PageLayout from "@components/PageLayout";
import { AuthStackParamList } from "@navigations/AuthStackNavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native";

export default function SignupScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, "Signup">) {
  return (
    <PageLayout>
      <Text>SignupScreen</Text>
    </PageLayout>
  );
}

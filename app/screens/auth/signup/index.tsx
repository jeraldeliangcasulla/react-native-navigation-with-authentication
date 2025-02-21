import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native";
import PageLayout from "../../../components/PageLayout";
import { AuthStackParamList } from "../../../navigations/AuthStackNavigation";

export default function SignupScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, "Signup">) {
  return (
    <PageLayout>
      <Text>SignupScreen</Text>
    </PageLayout>
  );
}

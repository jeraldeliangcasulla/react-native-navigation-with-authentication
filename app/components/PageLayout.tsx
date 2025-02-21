import { ReactNode } from "react";
import { View } from "react-native";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </View>
  );
}

import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AuthLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackButtonDisplayMode: "minimal",
        headerBackTitle: "",
        contentStyle: {
          paddingTop: insets.top,
          //   paddingBottom: insets.bottom,
          backgroundColor: "#EAEAEA",
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Verification",
          headerBackButtonDisplayMode: "minimal",
          headerBackTitle: "",
        }}
        name="OTPVerification"
      />
    </Stack>
  );
};

export default AuthLayout;

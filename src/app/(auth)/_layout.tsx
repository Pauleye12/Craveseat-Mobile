import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AuthLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: insets.top,
          //   paddingBottom: insets.bottom,
          backgroundColor: "#EAEAEA",
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Verification" }}
        name="OTPVerification"
      />
    </Stack>
  );
};

export default AuthLayout;

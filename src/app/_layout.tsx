import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nosifer_400Regular: require("../../assets/fonts/Nosifer_400Regular.ttf"),
    Inter_400Regular: require("../../assets/fonts/Inter_400Regular.ttf"),
    Inter_500Medium: require("../../assets/fonts/Inter_500Medium.ttf"),
    Inter_600SemiBold: require("../../assets/fonts/Inter_600SemiBold.ttf"),
    Inter_700Bold: require("../../assets/fonts/Inter_700Bold.ttf"),
    Poppins_400Regular: require("../../assets/fonts/Poppins_400Regular.ttf"),
    Poppins_500Medium: require("../../assets/fonts/Poppins_500Medium.ttf"),
    Poppins_600SemiBold: require("../../assets/fonts/Poppins_600SemiBold.ttf"),
    Poppins_700Bold: require("../../assets/fonts/Poppins_700Bold.ttf"),
    Pacifico_400Regular,
  });

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
    }
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

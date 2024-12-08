import { useState, useEffect } from "react";
import { View } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import '../global.css';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // User login status
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate loading resources or checking authentication
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Example: Set login status (you can replace this with real auth logic)
        const userLoggedIn = false; // Change this to true to test the dashboard screen
        setIsAuthenticated(userLoggedIn);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
      if (isAuthenticated) {
        router.replace("/screen/home/Dashboard");
      } else {
        router.replace("/screen/auth/SignIn");
      }
    }
  }, [appIsReady, isAuthenticated]);

  if (!appIsReady) {
    return null; // Show nothing until the app is ready
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screen/auth/SignIn" />
        <Stack.Screen name="screen/auth/ForgetPassword" />
        <Stack.Screen name="screen/home/Dashboard" />
      </Stack>
    </View>
  );
}

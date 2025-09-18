import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
      <Stack.Screen name="index" options={{ title:'Index' }}/>
      <Stack.Screen name="register" options={{ title:'Register' }}/>
      <Stack.Screen name="login" options={{ title:'Login' }}/>
      <Stack.Screen name="about" options={{ title:'About' }}/>
      <Stack.Screen name="home" options={{ title:'Home' }}/>

      <Toast/>
    </Stack>
    </SafeAreaProvider>
  );
}

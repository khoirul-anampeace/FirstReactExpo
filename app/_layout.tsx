import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title:'Index' }}/>
      <Stack.Screen name="register" options={{ title:'Register' }}/>
      <Stack.Screen name="login" options={{ title:'Login' }}/>
      <Stack.Screen name="about" options={{ title:'About' }}/>
      <Stack.Screen name="home" options={{ title:'Home' }}/>
    </Stack>
  );
}

import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name="(user)" options={{ title: 'User' }} />
      <Stack.Screen name="(client)" options={{ title: 'Client'}} />
      <Stack.Screen name="(admin)" options={{title: 'Admin'}} />
    </Stack>
  );
}

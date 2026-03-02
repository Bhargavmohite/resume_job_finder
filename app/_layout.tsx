import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(Candidate)' options={{ title: "Candidate Page" }} />
      <Stack.Screen name='(Recruiter)' options={{ title: "Recruiter Page" }} />
      <Stack.Screen name='(admin)' options={{ title: "Admin Page" }} />
    </Stack>
  );
}

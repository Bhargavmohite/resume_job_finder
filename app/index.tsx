import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const navigateToAdmin = () => {
    router.push("./(admin)");
  };
  const navigateToUser = () => {
    router.push("../(Candidate)");
  };
  const navigateToClient = () => {
    router.push("../(Recruiter)");
  };
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-primary'>Welcome to Resume Job Finder</Text>
      <View className='p-4 space-y-4'>
        <Button title=' Candidate' onPress={navigateToUser} />
      </View>
      <View className='p-4 space-y-4'>
        <Button title=' Recruiter' onPress={navigateToClient} />
      </View>
      <View className='p-4 space-y-4'>
        <Button title=' Admin' onPress={navigateToAdmin} />
      </View>
    </View>
  );
}

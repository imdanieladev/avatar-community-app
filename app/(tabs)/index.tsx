import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <CustomButton label="Button" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}

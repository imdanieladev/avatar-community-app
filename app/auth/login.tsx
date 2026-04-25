import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <InputField label="Email" placeholder="Enter your email" />
        <InputField label="Password" placeholder="Enter your password" />
      </View>
      <FixedBottomCTA label="Login" onPress={() => {}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

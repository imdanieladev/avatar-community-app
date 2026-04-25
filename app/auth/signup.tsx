import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { StyleSheet, View } from "react-native";

export default function SignupScreen() {
  return (
    <>
      <View style={styles.container}>
        <InputField label="Email" placeholder="Enter your email" />
        <InputField label="Password" placeholder="Enter your password" />
        <InputField
          label="Confirm Password"
          placeholder="Confirm your password"
        />
      </View>
      <FixedBottomCTA label="Sign up" onPress={() => {}} />
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

import { colors } from "@/constants";
import { Foundation } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: true,
          headerLeft: () => (
            <Link href="/" replace style={{ paddingRight: 10 }}>
              <Foundation name="home" size={28} color={"black"} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "Email Login",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "Sign up",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}

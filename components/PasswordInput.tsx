import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInputProps } from "react-native";
import InputField from "./InputField";

interface Props {
  submitBehavior?: TextInputProps["submitBehavior"];
}

function PasswordInput({ submitBehavior = "blurAndSubmit" }: Props) {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 8) {
            return "Password must be at least 8 characters long.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="Password"
          placeholder="Enter your password"
          submitBehavior={submitBehavior}
          secureTextEntry
          value={value}
          onChangeText={onChange}
          error={error?.message}
          onSubmitEditing={() => setFocus("passwordConfirm")}
        />
      )}
    />
  );
}

export default PasswordInput;

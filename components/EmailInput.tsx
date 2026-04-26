import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

function EmailInput() {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "Email is required.";
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)) {
            return "Invalid email address.";
          }
          return true;
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          onSubmitEditing={() => setFocus("password")}
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

export default EmailInput;

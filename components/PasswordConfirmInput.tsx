import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import InputField from "./InputField";

function PasswordConfirmInput() {
  const { control } = useFormContext();
  const password = useWatch({ control, name: "password" });
  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data !== password) {
            return "Passwords do not match.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

export default PasswordConfirmInput;

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

function DescriptionInput() {
  const { control } = useFormContext();
  return (
    <Controller
      name="description"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 1) {
            return "Enter at least 1 character";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="Description"
          placeholder="Enter a description"
          value={value}
          onChangeText={onChange}
          error={error?.message}
          multiline
        />
      )}
    />
  );
}

export default DescriptionInput;

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

function TitleInput() {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length <= 0) {
            return "Enter a title";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label="Title"
          placeholder="Enter a title"
          submitBehavior="submit"
          value={value}
          onChangeText={onChange}
          onSubmitEditing={() => setFocus("description")}
          error={error?.message}
        />
      )}
    />
  );
}

export default TitleInput;

import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface FormInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

export function FormInput({ label, placeholder, ...props }: FormInputProps) {
  return (
    <View className="mb-4">
      <Text className="text-white mb-2">{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#666"
        className="bg-[#1E1E1E] text-white p-3 rounded-lg"
        {...props}
      />
    </View>
  );
}

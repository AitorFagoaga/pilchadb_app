import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface Option {
  label: string;
  value: string;
}

interface FormPickerProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
}

export function FormPicker({
  label,
  value,
  onValueChange,
  options,
}: FormPickerProps) {
  return (
    <View className="mb-4">
      <Text className="text-white mb-2">{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        className="bg-[#1E1E1E] text-white rounded-lg"
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
            color="white"
          />
        ))}
      </Picker>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <View className="bg-zinc-800 px-3 py-1 rounded-full mr-2 mb-2">
      <Text className="text-white text-sm">{label}</Text>
    </View>
  );
}

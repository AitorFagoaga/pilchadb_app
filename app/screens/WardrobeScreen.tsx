import { View, Text, ScrollView } from "react-native";

export default function WardrobeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#121212]">
      <View className="p-4">
        <Text className="text-white text-2xl font-bold">My Wardrobe</Text>
        <Text className="text-gray-400 mt-2">Your personal collection</Text>
      </View>
    </ScrollView>
  );
}

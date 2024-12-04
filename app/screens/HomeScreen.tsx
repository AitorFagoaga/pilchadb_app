import { View, Text, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#121212]">
      <View className="p-4">
        <Text className="text-white text-2xl font-bold">Welcome Home</Text>
        <Text className="text-gray-400 mt-2">
          This is your personalized home feed
        </Text>
      </View>
    </ScrollView>
  );
}

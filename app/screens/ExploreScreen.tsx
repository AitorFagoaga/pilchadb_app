import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function ExploreScreen() {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: inset.top }}>
      <ScrollView className="flex-1 bg-[#121212]">
        <View className="p-4">
          <Text className="text-white text-2xl font-bold">Explore</Text>
          <Text className="text-gray-400 mt-2">
            Discover new items and trends
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

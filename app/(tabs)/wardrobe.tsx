import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../components/Logo";

export default function WardrobeScreen() {
  const inset = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 bg-[#121212]">
      <Logo />
      <ScrollView className="flex-1 mt-6">
        <View className="p-4">
          <Text className="text-white text-2xl font-bold">My Wardrobe</Text>
          <Text className="text-gray-400 mt-2">Your personal collection</Text>
        </View>
      </ScrollView>
    </View>
  );
}

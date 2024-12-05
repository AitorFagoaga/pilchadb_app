import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ImgOverImg from "@/components/ImgOverImg";
export default function BrandDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id, title, imageUrl } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ paddingTop: insets.top }} className="flex-1">
        <View className="absolute z-10 left-4" style={{ top: insets.top + 16 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 bg-black/50 rounded-full items-center justify-center"
          >
            <FontAwesome6 name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1">
          <View className="relative">
            <ImgOverImg
              backgroundImage={imageUrl as string}
              foregroundImage={imageUrl as string}
            />
          </View>
          <View className="p-4">
            <Text className="text-white text-2xl font-bold">{title}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

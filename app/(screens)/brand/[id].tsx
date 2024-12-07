import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import BrandProfileHeader from "@/components/BrandProfileHeader";
import LinksAndSaveBrand from "@/components/LinksAndSaveBrand";
import HorizontalList from "@/components/HorizontalList";

export default function BrandDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id, title, imageUrl } = useLocalSearchParams();
  const prendas = [
    {
      id: 1,
      title: "Beanies",
      imageUrl:
        "https://images.pexels.com/photos/10530054/pexels-photo-10530054.jpeg",
    },
    {
      id: 2,
      title: "Buzo Crewneck",
      imageUrl:
        "https://acdn.mitiendanube.com/stores/001/449/290/products/imagen_2024-07-11_205532290-d5f74fb17dbfdd6e6e17207421345760-1024-1024.png",
    },
  ];

  const handleItemPress = (id: number) => {
    console.log(`Elemento presionado con ID: ${id}`);
    // Aquí puedes redirigir o ejecutar alguna acción
  };
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
            <BrandProfileHeader
              backgroundImage={imageUrl as string}
              foregroundImage={imageUrl as string}
            />
          </View>
          <View className="flex-row justify-between p-4">
            <View className="">
              <Text className="text-white text-2xl font-bold">{title}</Text>
            </View>
            <FontAwesome6
              name="bookmark"
              size={24}
              color="white"
              style={{ marginRight: 13 }}
            />
          </View>

          <LinksAndSaveBrand />
          <HorizontalList
            title="Tipo de prendas"
            items={prendas}
            onPress={handleItemPress}
          />
        </ScrollView>
      </View>
    </View>
  );
}

import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import BrandProfileHeader from "@/components/BrandProfileHeader";
import LinksAndSaveBrand from "@/components/LinksAndSaveBrand";
import HorizontalList from "@/components/HorizontalList";
import Chip from "@/components/Chip";
import * as Linking from "expo-linking"; 
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
    {
      id: 3,
      title: "Beanies",
      imageUrl:
        "https://images.pexels.com/photos/10530054/pexels-photo-10530054.jpeg",
    },
  ];

  const handleOpenLink = async (url: string) => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url); 
      } else {
        console.error(`No se puede abrir el enlace: ${url}`);
      }
    };

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
          <View className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <Text className="text-white text-2xl font-bold">{title}</Text>
              <Pressable
                onPress={() => handleOpenLink("https://tu-sitio-web.com")}
                className="flex-row ml-2 items-center justify-center rounded-full border-[1px] border-white  text-xs mt-1 p-2" 
              >
                <Text className="text-white text-xs text-center font-light">Página Oficial</Text>
                <MaterialCommunityIcons
                  name="link-variant"
                  fontWeight="light"
                  size={15}
                  color="white"
                  style={{ marginLeft: 4 }}
                />
              </Pressable>
            </View>
            <FontAwesome6
              name="bookmark"
              size={24}
              color="white"
              style={{ marginRight: 13 }}
            />
          </View>
          <LinksAndSaveBrand />
          <ScrollView
            horizontal
            className="flex-row flex-wrap mt-2"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 16,
            }}
          >
            <Chip label="Streetwear" />
            <Chip label="Urban" />
            <Chip label="Casual" />
            <Chip label="Streetwear" />
            <Chip label="Urban" />
          </ScrollView>
          
          <HorizontalList
            title="."
            items={prendas}
            onPress={handleItemPress}
          />
        </ScrollView>
      </View>
    </View>
  );
}

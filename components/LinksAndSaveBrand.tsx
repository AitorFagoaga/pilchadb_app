import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking"; // Importar el módulo de Linking
import AntDesign from "@expo/vector-icons/AntDesign";

const LinksAndSaveBrand = () => {
  const handleOpenLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url); // Abre el enlace en el navegador predeterminado
    } else {
      console.error(`No se puede abrir el enlace: ${url}`);
    }
  };

  return (
    <View className="flex-row justify-between p-4">
      <View className="flex flex-col ">
        {/* Instagram */}
        <Pressable
          onPress={() => handleOpenLink("https://instagram.com/aitorfagoaga")}
          className="flex-row items-center gap-2 text-xs"
        >
          <FontAwesome5
            name="instagram"
            fontWeight="light"
            size={10}
            color="white"
          />
          <Text className="text-white text-xs font-light">Instagram</Text>
        </Pressable>

        {/* Website */}
        <Pressable
          onPress={() => handleOpenLink("https://tu-sitio-web.com")}
          className="flex-row items-center  gap-2 text-xs mt-1"
        >
          <MaterialCommunityIcons
            name="web"
            fontWeight="light"
            size={10}
            color="white"
          />
          <Text className="text-white text-xs font-light">Website</Text>
        </Pressable>
      </View>
      <View className="flex-row gap-4">
        <View className="flex items-center ml-6">
          <AntDesign name="staro" size={24} color="red" />
          <Text className="text-white text-xs mt-1">Puntuar</Text>
        </View>
        <View className="flex items-center ">
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={24}
            color="white"
          />
          <Text className="text-white text-xs mt-1">Reseñas</Text>
        </View>
      </View>
    </View>
  );
};

export default LinksAndSaveBrand;

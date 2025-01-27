import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking"; 
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
    <View className="flex-row justify-between pl-4 pb-4">
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

      </View>
    </View>
  );
};

export default LinksAndSaveBrand;

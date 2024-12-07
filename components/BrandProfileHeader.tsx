import { View, Image, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
interface BrandProfileHeaderProps {
  backgroundImage: string;
  foregroundImage: string;
  rating?: number;
  qualityScore?: number;
}

export default function BrandProfileHeader({
  backgroundImage,
  foregroundImage,
  rating = 7.2,
  qualityScore = 7,
}: BrandProfileHeaderProps) {
  return (
    <View className="relative">
      {/* Imagen de fondo */}
      <Image
        source={{ uri: backgroundImage }}
        className="w-full h-64 opacity-20"
        resizeMode="cover"
      />

      {/* Contenido superpuesto */}
      <View className="absolute flex-row top-16 left-16">
        {/* Imagen principal */}
        <Image
          source={{ uri: foregroundImage }}
          className="w-28 h-40 rounded-md"
          resizeMode="cover"
        />

        {/* Calificación y opciones */}
        <View className="flex-col">
          <View className="flex-row ml-6 mt-6">
            {/* Calificación con estrella */}
            <View className="flex-col ">
              <View className="flex-row items-center ">
                <AntDesign name="star" size={20} color="gold" />
                <Text className="text-white text-lg font-bold ml-1">
                  {rating}
                </Text>
              </View>
              <Text className="text-gray-400 text-xs ml-1 text-center">
                2,000
              </Text>
            </View>
            {/* Opciones: Puntuar y Reseñas */}
            <View className="flex-row justify-between ">
              {/* Puntuar */}
              <View className="flex items-center ml-6">
                <AntDesign name="staro" size={24} color="red" />
                <Text className="text-white text-xs mt-1">Puntuar</Text>
              </View>

              {/* Reseñas */}
              <View className="flex items-center ml-6">
                <MaterialCommunityIcons
                  name="comment-text-outline"
                  size={24}
                  color="white"
                />
                <Text className="text-white text-xs mt-1">Reseñas</Text>
              </View>
            </View>
          </View>
          {/* Calidad */}
          <View className="mt-6 ml-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-400 text-xs">Calidad</Text>
              <Text className="text-white text-xs">{qualityScore}</Text>
            </View>
            {/* Barra de progreso */}
            <View className="w-full bg-gray-300 h-2 rounded-full mt-2">
              <View
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${(qualityScore / 10) * 100}%` }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

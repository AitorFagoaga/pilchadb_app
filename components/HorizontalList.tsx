import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

interface Item {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  title: string;
  items: Item[];
  onPress: (id: number) => void; // Acción al presionar un elemento
}

const HorizontalList: React.FC<Props> = ({ title, items, onPress }) => {
  const CHARACTER_WIDTH = 9;
  const estimatedWidth = title.length * CHARACTER_WIDTH;

  return (
    <View className="mt-2 mb-4 p-2">
      {/* Título */}
      <Text className="text-white text-sm ml-7 font-medium mb-2 ">{title}</Text>

      {/* Línea divisoria */}
      <View className="w-full h-[1px] bg-gray-600 mb-4">
        <View
          style={{ width: estimatedWidth }}
          className="absolute bg-black h-full ml-4"
        />
      </View>
      <Text className="text-white text-[8px] font-thin ml-1 mb-4">
        * Contiene prendas similares a estas:
      </Text>
      {/* Lista horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="mr-4 items-center"
            onPress={() => onPress(item.id)}
          >
            {/* Imagen */}
            <Image
              source={{ uri: item.imageUrl }}
              className="w-28 h-28 rounded-md"
              resizeMode="cover"
            />
            {/* Texto */}
            <Text className="text-white text-sm mt-2 text-center">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalList;

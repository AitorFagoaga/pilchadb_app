import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
    <View className="  p-2">
      {/* Título */}

      {/* Línea divisoria */}
      <View className="w-full h-[0.2px] bg-gray-700 rounded-r-lg mb-4">
        
      </View>
      <View className="mt-4 mb-8">
        <Text className="text-white m-auto mb-4">La Marca todavia no a subido productos</Text>
        <MaterialCommunityIcons name="cart-off" size={30} color="white" style={{ margin: "auto" }} />
      </View>
      <Text className="text-white text-[10px] font-light ml-1 mb-4">
        Contiene prendas similares a estas:
      </Text>
      {/* Lista horizontal */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-wrap flex-row">
          {items.map((item) => (
            <View className="w-1/3 p-[1.5px]" key={item.id}> 
              <TouchableOpacity
                className="items-center  "
                onPress={() => onPress(item.id)}
              >
                   {/* Imagen */}
                  <Image
                    source={{ uri: item.imageUrl }}
                    className="w-full h-40 border-solid border-[0.1px] border-cyan-500 rounded-t-lg" 
                    resizeMode="cover"
                  />
                  <View className="bg-white border-solid border-[0.5px] border-white rounded-b-lg w-full p-2">
                  {/* Texto */}
                  <Text className="text-black text-sm  text-center">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalList;

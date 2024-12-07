import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";

export type Card = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  title: string;
  cards: Card[];
}

const BrandCard: React.FC<Props> = ({ title, cards }) => {
  const router = useRouter();

  const handleCardPress = (card: Card) => {
    router.push({
      pathname: "/(screens)/brand/[id]",
      params: {
        id: card.id,
        title: card.title,
        imageUrl: card.imageUrl,
      },
    });
  };

  // Función para agrupar las tarjetas de a dos
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  return (
    <View className="relative p-4">
      {/* Título */}
      <Text className="text-xl text-white font-bold mb-4">{title}</Text>

      {/* Listado de tarjetas agrupadas en filas de dos */}
      <View className="flex-wrap flex-row">
        {groupedCards.map((group, groupIndex) => (
          <View key={groupIndex} className="flex-row mb-4">
            {group.map((card) => (
              <TouchableOpacity
                key={card.id}
                onPress={() => handleCardPress(card)}
                activeOpacity={0.7}
                className="w-[190px] mr-4"
              >
                {/* Imagen */}
                <View className="h-[200px] rounded-lg overflow-hidden">
                  <Image
                    source={{ uri: card.imageUrl }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    contentFit="cover"
                    transition={200}
                  />
                </View>

                {/* Título e ícono */}
                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-sm font-medium text-white flex-1 mr-2">
                    {card.title}
                  </Text>
                  <FontAwesome6
                    name="bookmark"
                    size={15}
                    className="mr-4"
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default BrandCard;

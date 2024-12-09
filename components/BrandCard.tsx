import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

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

  // Función para agrupar las tarjetas de a tres
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }

  return (
    <View className="relative p-0">
      <Text className="text-xl text-white font-bold ml-4 mb-4">{title}</Text>

      <View className="flex-wrap flex-row ml-4">
        {groupedCards.map((group, groupIndex) => (
          <View key={groupIndex} className="flex-row mb-[15px]">
            {group.map((card) => (
              <View className="">
                <TouchableOpacity
                  key={card.id}
                  onPress={() => handleCardPress(card)}
                  activeOpacity={0.7}
                  className="w-[130px] mr-2"
                >
                  {/* Card container */}
                  <View className="aspect-square bg-black rounded-lg w-full">
                    <View className="h-[130px] rounded-t-lg overflow-hidden">
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
                  </View>
                </TouchableOpacity>
                {/* Título e ícono */}
                <View className="flex-row w-[130px] drop-shadow-lg rounded-b-lg justify-between items-center p-3 bg-[#1E1E1E] ">
                  <Text className="text-sm font-medium text-white flex-1 ml-2">
                    7.2
                  </Text>
                  <FontAwesome6 name="bookmark" size={20} color="white" />
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default BrandCard;

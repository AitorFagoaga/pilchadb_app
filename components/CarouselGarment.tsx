import React, { useRef } from "react";
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

const CarouselGarment: React.FC<Props> = ({ title, cards }) => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);

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

  return (
    <View className="relative p-4">
      <Text className="text-xl text-white font-bold mb-4">{title}</Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4"
      >
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => handleCardPress(card)}
            activeOpacity={0.7}
            className="w-[80px]"
          >
            <View className="h-[80px] rounded-full overflow-hidden">
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
            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-sm font-medium text-white flex-1 mr-2">
                {card.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CarouselGarment;

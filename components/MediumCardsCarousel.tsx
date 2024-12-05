import React, { useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export type Card = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  title: string;
  cards: Card[];
}

const MediumCardsCarousel: React.FC<Props> = ({ title, cards }) => {
  const scrollViewRef = useRef<ScrollView>(null);

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
          <View key={card.id} className="w-[160px]">
            <View className="h-[240px] rounded-lg overflow-hidden">
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
              <FontAwesome6
                name="bookmark"
                size={15}
                className="mr-4"
                color="white"
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MediumCardsCarousel;

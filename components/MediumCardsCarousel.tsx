import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
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

const MediumCardsCarousel: React.FC<Props> = ({ title, cards }) => {
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
    <View className="relative mt-4">
      {/* Título del carrusel */}
      <Text className="text-md text-white font-bold mb-4 ml-4">{title}</Text>

      {/* ScrollView con padding inicial */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 16,
        }}
        className="flex-row space-x-2"
      >
        {cards.map((card) => (
          <View key={card.id}>
            <TouchableOpacity
              onPress={() => handleCardPress(card)}
              activeOpacity={0.7}
              className="w-[120px]"
            >
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
            </TouchableOpacity>
            <View className="flex-row drop-shadow-lg rounded-b-lg justify-between items-center p-3 bg-[#1E1E1E]">
              <View className="flex-row items-center">
                <AntDesign name="star" size={15} color="gold" />
                <Text className="text-white text-md font-bold ml-1">7.2</Text>
              </View>
              <Pressable>
                <FontAwesome6
                  name="bookmark"
                  size={15}
                  className="mr-4"
                  color="white"
                />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MediumCardsCarousel;

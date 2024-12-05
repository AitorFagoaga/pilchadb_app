import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MediumCardsCarousel, {
  Card,
} from "../../components/MediumCardsCarousel";

type CarouselData = {
  id: number;
  title: string;
  cards: Card[];
};

const DATA: CarouselData[] = [
  {
    id: 1,
    title: "Carousel 1",
    cards: [
      {
        id: 1,
        imageUrl:
          "https://anacleta.com.ar/wp-content/uploads/2022/09/0071_Kosiuko.png",
        title: "Item 1.1",
      },
      {
        id: 2,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59tL0hRmFbmhQcCT7qOS7cN9E_JogW2rRhQ&s",
        title: "Item 1.2",
      },
      {
        id: 3,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoB_srHFws2ppHorwoHPD3wE3EBXQ-C5n0A&s",
        title: "Item 1.3",
      },
    ],
  },
  {
    id: 2,
    title: "Carousel 2",
    cards: [
      {
        id: 1,
        imageUrl: "https://ejemplo.com/imagen1.jpg",
        title: "Item 2.1",
      },
      {
        id: 2,
        imageUrl: "https://ejemplo.com/imagen2.jpg",
        title: "Item 2.2",
      },
    ],
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: CarouselData }) => (
    <MediumCardsCarousel title={item.title} cards={item.cards} />
  );

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-[#121212]">
      <FlatList
        className="flex-1 mt-4"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
        }}
      />
    </View>
  );
}

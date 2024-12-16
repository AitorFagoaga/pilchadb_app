import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MediumCardsCarousel, {
  Card,
} from "../../components/MediumCardsCarousel";
import Logo from "../../components/Logo";

type CarouselData = {
  id: number;
  title: string;
  cards: Card[];
};

const DATA: CarouselData[] = [
  {
    id: 1,
    title: "Marcas mejor valoradas",
    cards: [
      {
        id: 1,
        imageUrl:
          "https://anacleta.com.ar/wp-content/uploads/2022/09/0071_Kosiuko.png",
        title: "Kosiuko",
      },
      {
        id: 2,
        imageUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/04d54687806377.5dc321cdac09f.png",
        title: "Underwave",
      },
      {
        id: 3,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoB_srHFws2ppHorwoHPD3wE3EBXQ-C5n0A&s",
        title: "Etiqueta Negra",
      },
      {
        id: 4,
        imageUrl:
          "https://yt3.googleusercontent.com/Guz1QjoTQHtwOTAuSXcmG7mz10sKULzURDxQYB4f2qd_fJD0xEPwKhx32m7kiRlOzDShP51H=s900-c-k-c0x00ffffff-no-rj",
        title: "Harvey Willys",
      },
      {
        id: 5,
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/023/869/641/non_2x/levis-brand-clothes-logo-symbol-design-fashion-illustration-free-vector.jpg",
        title: "Levis",
      },
    ],
  },
  {
    id: 2,
    title: "Marcas que venden Hoodies",
    cards: [
      {
        id: 6,
        imageUrl:
          "https://yt3.googleusercontent.com/Guz1QjoTQHtwOTAuSXcmG7mz10sKULzURDxQYB4f2qd_fJD0xEPwKhx32m7kiRlOzDShP51H=s900-c-k-c0x00ffffff-no-rj",
        title: "Harvey Willys",
      },
      {
        id: 7,
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/023/869/641/non_2x/levis-brand-clothes-logo-symbol-design-fashion-illustration-free-vector.jpg",
        title: "Levis",
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
      <Logo />
      <FlatList
        className="flex-1"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
          marginTop: 34,
        }}
      />
    </View>
  );
}

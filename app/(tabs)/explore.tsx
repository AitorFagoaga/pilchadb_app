import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import Logo from "../../components/Logo";
import BrandCard, { Card } from "../../components/BrandCard";
import CarouselGarment, {
  Card as CardGarment,
} from "../../components/CarouselGarment";
const DATA: Card[] = [
  {
    id: 1,
    imageUrl:
      "https://anacleta.com.ar/wp-content/uploads/2022/09/0071_Kosiuko.png",
    title: "Item 1.1",
  },
  {
    id: 2,
    imageUrl:
      "https://yt3.googleusercontent.com/Guz1QjoTQHtwOTAuSXcmG7mz10sKULzURDxQYB4f2qd_fJD0xEPwKhx32m7kiRlOzDShP51H=s900-c-k-c0x00ffffff-no-rj",
    title: "Item 1.2",
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
      "https://static.vecteezy.com/system/resources/previews/023/869/641/non_2x/levis-brand-clothes-logo-symbol-design-fashion-illustration-free-vector.jpg",
    title: "Item 1.4",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdLESpbWUDatZ_McZ_oxJFIJHkrT9oSCpCQ&s",
    title: "Item 1.4",
  },
];

const DATA_GARMENT: CardGarment[] = [
  {
    id: 1,
    imageUrl:
      "https://anacleta.com.ar/wp-content/uploads/2022/09/0071_Kosiuko.png",
    title: "Item 1.1",
  },
  {
    id: 2,
    imageUrl:
      "https://yt3.googleusercontent.com/Guz1QjoTQHtwOTAuSXcmG7mz10sKULzURDxQYB4f2qd_fJD0xEPwKhx32m7kiRlOzDShP51H=s900-c-k-c0x00ffffff-no-rj",
    title: "Item 1.2",
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
      "https://static.vecteezy.com/system/resources/previews/023/869/641/non_2x/levis-brand-clothes-logo-symbol-design-fashion-illustration-free-vector.jpg",
    title: "Item 1.4",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdLESpbWUDatZ_McZ_oxJFIJHkrT9oSCpCQ&s",
    title: "Item 1.4",
  },
];

export default function ExploreScreen() {
  const inset = useSafeAreaInsets();

  const handleSearch = async (query: string) => {
    try {
      console.log("Buscando:", query);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  };

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 bg-[#121212]">
      {/* Logo */}
      <Logo />

      {/* SearchBar */}
      <View className="mt-14">
        <SearchBar onSearch={handleSearch} placeholder="Search items..." />

        {/* ScrollView para los BrandCards */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: inset.bottom,
          }}
        >
          <CarouselGarment title="Prendas destacadas" cards={DATA_GARMENT} />
          {/* BrandCard */}
          <BrandCard title="Marcas destacadas" cards={DATA} />
        </ScrollView>
      </View>
    </View>
  );
}

import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar"
import Logo from "../../components/Logo";
import BrandCard, { Card } from "../../components/BrandCard";
import CarouselGarment, {
  Card as CardGarment,
} from "../../components/CarouselGarment";
import { getAllBrands, searchBrands } from "@/service/brandService";
import React, { useEffect, useState } from "react";

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
  const [featuredBrands, setFeaturedBrands] = useState<Card[]>([]); // Marcas destacadas obtenidas del backend
  const [searchResults, setSearchResults] = useState<Card[]>([]); // Marcas filtradas
  const [isSearching, setIsSearching] = useState(false); // Estado para búsquedas activas

  // Obtener marcas destacadas al cargar la pantalla
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getAllBrands();
        setFeaturedBrands(
          brands.map((brand) => ({
            id: brand.id,
            imageUrl: brand.logoImg, 
            title: brand.name,
          }))
        );
      } catch (error: any) {
        console.error("Error al obtener marcas destacadas:", error.message);
      }
    };

    fetchBrands();
  }, []);

  const handleSearch = async (input: string) => {
    if (!input.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const results = await searchBrands(input);
      setSearchResults(
        results.map((brand) => ({
          id: brand.id,
          imageUrl: brand.logoImg,
          title: brand.name,
        }))
      );
    } catch (error: any) {
      console.error("Error al buscar marcas:", error.message);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 bg-[#121212]">
      {/* Logo */}
      <Logo />

      {/* Contenedor principal */}
      <View className="flex-1">
        {/* SearchBar con margen superior ajustado */}
        <View className="mt-14 mb-2 z-20">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Buscar marcas..."
            key="explore"
          />
        </View>

        {/* ScrollView para el contenido */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: inset.bottom,
          }}
        >
          {isSearching ? (
            <Text className="text-center text-white mt-4">Buscando...</Text>
          ) : searchResults.length > 0 ? (
            <BrandCard title="Resultados de búsqueda" cards={searchResults} />
          ) : (
            <>
              <CarouselGarment title="Prendas destacadas" cards={DATA_GARMENT} />
              <BrandCard title="Marcas destacadas" cards={featuredBrands} />
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
}


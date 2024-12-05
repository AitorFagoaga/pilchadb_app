import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import Logo from "../../components/Logo";

export default function ExploreScreen() {
  const inset = useSafeAreaInsets();

  const handleSearch = async (query: string) => {
    try {
      // const response = await fetch(`tu-api-endpoint?search=${query}`);
      // const data = await response.json();
      console.log("Buscando:", query);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  };

  return (
    <View style={{ paddingTop: inset.top }} className="flex-1 bg-[#121212]">
      <Logo />
      <View className="mt-6">
        <View className="p-4">
          <Text className="text-white text-2xl font-bold">Explore</Text>
          <Text className="text-gray-400 mt-2">
            Discover new items and trends
          </Text>
        </View>
        <SearchBar onSearch={handleSearch} placeholder="Search items..." />
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: inset.bottom,
          }}
        >
          {/* Añadir los resultados de la búsqueda */}
        </ScrollView>
      </View>
    </View>
  );
}

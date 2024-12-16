import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Logo from "@/components/Logo";
export default function UserTypeSelection() {
  const router = useRouter();

  const handleSelect = (userType: string) => {
    console.log(`Selected: ${userType}`);
    router.push({
      pathname: "/login/CreateUser",
      params: { userType: userType },
    });
  };

  return (
    <View className="flex-1  bg-[#121212] justify-center items-center px-6">
      <Logo isLogin={true} />
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute left-4 top-12 z-50"
      >
        <Text className="text-white text-base"> {"<< Volver"}</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg font-bold mb-8">
        Selecciona tu tipo de usuario
      </Text>

      {/* Botón 1: Soy una marca */}

      <TouchableOpacity
        className="w-full bg-black rounded-lg p-4 mb-4 flex-row items-center justify-between"
        onPress={() => handleSelect("brand")}
      >
        <Text className="text-white text-base font-medium">Soy una marca</Text>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color="white"
        />
      </TouchableOpacity>

      {/* Botón 2: Soy una persona */}
      <TouchableOpacity
        className="w-full bg-black rounded-lg p-4 flex-row items-center justify-between"
        onPress={() => handleSelect("persona")}
      >
        <Text className="text-white text-base font-medium">
          Soy una persona
        </Text>
        <MaterialCommunityIcons
          name="account-outline"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

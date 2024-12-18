import React from "react";
import { View, Image, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
interface LogoProps {
  isLogin?: boolean;
}

const Logo = ({ isLogin = false }: LogoProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const handleLoginPress = () => {
    {isAuthenticated ? router.push("/(screens)/SettingsProfile") : router.push("/(screens)/login/LoginScreen") };
  };

  return (
    <View className="absolute h-24 top-0 left-0 right-0 mb-6 mt-6 items-center justify-center  bg-[#121212]">
      {!isLogin && (
        <Pressable
          onPress={handleLoginPress}
          style={{ zIndex: 10 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="white"
          />
        </Pressable>
      )}
      <Image
        source={require("../assets/images/FullLogoSinFondo.png")}
        className="h-40 w-92"
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

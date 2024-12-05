import React from "react";
import { View, Image } from "react-native";

const Logo = () => {
  return (
    <View className="absolute top-0 left-0 right-0 mb-6 items-center justify-center z-10 ">
      <Image
        source={require("../assets/images/FullLogoSinFondo.png")}
        className="h-40 w-92"
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

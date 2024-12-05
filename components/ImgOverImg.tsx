import { View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ImgOverImgProps {
  backgroundImage: string;
  foregroundImage: string;
}

export default function ImgOverImg({
  backgroundImage,
  foregroundImage,
}: ImgOverImgProps) {
  return (
    <View className="relative">
      <Image
        source={{ uri: backgroundImage }}
        className="w-full opacity-20 h-64"
        resizeMode="cover"
      />
      <View className="absolute flex-row top-16 left-16">
        <Image
          source={{ uri: foregroundImage }}
          className="w-28 h-40 rounded-md"
          resizeMode="cover"
        />
        <AntDesign
          name="star"
          size={20}
          marginTop={20}
          style={{ left: 22 }}
          color="gold"
        />
      </View>
    </View>
  );
}

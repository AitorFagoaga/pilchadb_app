import React, { useState } from "react";
import { View, Text, Pressable, PanResponder, Animated } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Slider } from "@miblanchard/react-native-slider";
interface RateBrandModalProps {
  onClose: () => void;
  onSubmit: (
    brandRating: number,
    qualityRating: number,
    priceRating: number,
  ) => void;
}

export default function RateBrandModal({
  onClose,
  onSubmit,
}: RateBrandModalProps) {
  const [brandRating, setBrandRating] = useState(5);
  const [qualityRating, setQualityRating] = useState(5);
  const [priceRating, setPriceRating] = useState(2); // Valor inicial para precio

  const panBrand = new Animated.Value(0); // Para rastrear el gesto de las estrellas de la marca
  const panPrice = new Animated.Value(0); // Para rastrear el gesto de los símbolos de precio

  // Configuración de PanResponder para la valoración de la marca
  const panResponderBrand = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newRating = Math.min(
        10,
        Math.max(1, Math.ceil((gestureState.moveX - 40) / 30)), // Ajusta según el tamaño de las estrellas
      );
      setBrandRating(newRating);
    },
    onPanResponderRelease: () => {
      panBrand.setValue(brandRating); // Asegura que la calificación se quede fija
    },
  });

  // Configuración de PanResponder para la valoración del precio
  const panResponderPrice = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newRating = Math.min(
        4,
        Math.max(1, Math.ceil((gestureState.moveX - 40) / 60)), // Ajusta según el tamaño de los símbolos $
      );
      setPriceRating(newRating);
    },
    onPanResponderRelease: () => {
      panPrice.setValue(priceRating); // Asegura que la calificación se quede fija
    },
  });

  return (
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="w-full bg-[#121212] p-6 rounded-lg shadow-lg">
        <Text className="text-lg font-bold text-white text-center">
          Valorar la marca
        </Text>

        {/* Valoración de la marca con estrellas dinámicas */}
        <Text className="mt-4 text-white">Valoración general de la marca:</Text>
        <View
          className="flex-row justify-center my-4"
          {...panResponderBrand.panHandlers}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <AntDesign
              key={index}
              name={index < brandRating ? "star" : "staro"}
              size={32}
              color={index < brandRating ? "gold" : "gray"}
              style={{ marginHorizontal: 4 }}
            />
          ))}
        </View>
        <Text className="text-center text-white font-semibold">
          {brandRating} / 10
        </Text>

        {/* Valoración de la calidad */}
        <Text className="mt-4 text-white">Calidad de las prendas:</Text>
        <Slider
          value={qualityRating}
          onValueChange={(value) => setQualityRating(value[0])}
          minimumValue={1}
          maximumValue={10}
          step={1}
          thumbTintColor="#1fb28a"
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
        />
        <Text className="text-center text-white font-semibold">
          {qualityRating} / 10
        </Text>

        {/* Valoración del precio */}
        <Text className="mt-4 text-white">Precio:</Text>
        <View
          className="flex-row justify-center my-4"
          {...panResponderPrice.panHandlers}
        >
          <Text className="my-auto mr-2 text-gray-500">Barato</Text>
          {Array.from({ length: 4 }).map((_, index) => (
            <Text
              key={index}
              style={{
                fontSize: 32,
                color: index < priceRating ? "green" : "gray",
                marginHorizontal: 8,
              }}
            >
              $
            </Text>
          ))}
          <Text className="my-auto ml-2 text-gray-500">Caro</Text>
        </View>
        <Text className="text-center text-white font-semibold">
          {priceRating} / 4
        </Text>

        {/* Botones */}
        <View className="flex-row justify-between mt-6">
          <Pressable
            className="bg-gray-300 py-2 px-4 rounded-lg"
            onPress={onClose}
          >
            <Text className="text-gray-700">Cancelar</Text>
          </Pressable>
          <Pressable
            className="bg-green-500 py-2 px-4 rounded-lg"
            onPress={() => onSubmit(brandRating, qualityRating, priceRating)}
          >
            <Text className="text-white">Enviar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

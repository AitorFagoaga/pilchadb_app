import React from "react";
import { View, Text, TouchableOpacity, Switch, Image } from "react-native";
import { FormInput } from "./components/FormInput";
import { FormPicker } from "./components/FormPicker";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BrandFormProps {
  brandExists: boolean;
  setBrandExists: (value: boolean) => void;
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  handleInputChange: (field: string, value: string) => void;
  submitForm: () => void;
}

export default function BrandForm({
  brandExists,
  setBrandExists,
  selectedBrand,
  setSelectedBrand,
  country,
  setCountry,
  category,
  setCategory,
  handleInputChange,
  submitForm,
}: BrandFormProps) {
  const insets = useSafeAreaInsets();

  const [logoUri, setLogoUri] = React.useState<string | null>(null);

  const countryOptions = [
    { label: "Selecciona un país", value: "" },
    { label: "Argentina", value: "argentina" },
    { label: "Chile", value: "chile" },
    { label: "Brasil", value: "brasil" },
  ];

  const categoryOptions = [
    { label: "Selecciona una categoría", value: "" },
    { label: "Ropa", value: "ropa" },
    { label: "Zapatos", value: "zapatos" },
    { label: "Accesorios", value: "accesorios" },
  ];

  const brandOptions = [
    { label: "Selecciona una marca", value: "" },
    { label: "Marca A", value: "marcaA" },
    { label: "Marca B", value: "marcaB" },
  ];

  const pickImage = async () => {
    // Solicitar permisos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Se necesitan permisos para acceder a la galería");
      return;
    }

    // Abrir selector de imágenes
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setLogoUri(uri);
      handleInputChange("logo", uri);
    }
  };

  return (
    <View style={{ paddingBottom: insets.bottom }}>
      <View className="mb-4">
        <Text className="text-white mb-2">¿La marca ya existe?</Text>
        <Switch value={brandExists} onValueChange={setBrandExists} />
        {brandExists && (
          <FormPicker
            label=""
            value={selectedBrand}
            onValueChange={setSelectedBrand}
            options={brandOptions}
          />
        )}
      </View>

      {!brandExists && (
        <>
          <TouchableOpacity
            className="bg-[#1E1E1E] p-4 rounded-lg mb-4"
            onPress={pickImage}
          >
            <Text className="text-white text-center">Seleccionar Logo</Text>
          </TouchableOpacity>

          {logoUri && (
            <View className="mb-4 items-center">
              <Image
                source={{ uri: logoUri }}
                className="w-32 h-32 rounded-lg"
                resizeMode="cover"
              />
              <TouchableOpacity
                className="mt-2"
                onPress={() => {
                  setLogoUri(null);
                  handleInputChange("logo", "");
                }}
              >
                <Text className="text-red-500">Eliminar imagen</Text>
              </TouchableOpacity>
            </View>
          )}

          <FormPicker
            label="País"
            value={country}
            onValueChange={setCountry}
            options={countryOptions}
          />

          <FormInput
            label="Nombre de la Marca"
            placeholder="Nombre de la marca"
            onChangeText={(value) => handleInputChange("brandName", value)}
          />

          <FormInput
            label="Instagram"
            placeholder="URL de Instagram"
            onChangeText={(value) => handleInputChange("instagram", value)}
          />

          <FormInput
            label="Página Web"
            placeholder="URL de la página web"
            onChangeText={(value) => handleInputChange("website", value)}
          />

          <FormInput
            label="Email Oficial"
            placeholder="Email oficial"
            onChangeText={(value) => handleInputChange("officialEmail", value)}
          />

          <FormPicker
            label="Categoría"
            value={category}
            onValueChange={setCategory}
            options={categoryOptions}
          />
        </>
      )}

      <TouchableOpacity
        className="bg-green-600 p-4 rounded-lg mt-4"
        onPress={submitForm}
      >
        <Text className="text-white text-center">
          Solicitar Creación de Marca
        </Text>
      </TouchableOpacity>
    </View>
  );
}

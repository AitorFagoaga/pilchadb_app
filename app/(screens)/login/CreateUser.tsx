import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // o usa react-native-picker-select
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BrandForm from "./BrandForm";
import UserForm from "./UserForm";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

export default function CreateUser() {
  const router = useRouter();
  const { userType } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const [isBrand, setIsBrand] = useState(false);
  const [brandExists, setBrandExists] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    age: "",
    password: "",
    phone: "",
    brandName: "",
    instagram: "",
    website: "",
    officialEmail: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = () => {
    console.log("Submitted data:", form);
    // Aquí puedes manejar el envío de los datos
  };

  return (
    <ScrollView
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 bg-[#121212]  px-4 py-6"
    >
      <TouchableOpacity onPress={() => router.back()} className="  ">
        <Text className="text-white text-base"> {"<< Volver"}</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg font-bold mb-4">
        {userType === "brand" ? "Formulario de Marca" : "Formulario de Usuario"}
      </Text>

      {/* Formulario de Marca */}
      {userType === "brand" ? (
        <BrandForm
          brandExists={brandExists}
          setBrandExists={setBrandExists}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          country={country}
          setCountry={setCountry}
          category={category}
          setCategory={setCategory}
          handleInputChange={handleInputChange}
          submitForm={submitForm}
        />
      ) : (
        // Formulario de Usuario Persona
        <UserForm
          country={country}
          setCountry={setCountry}
          handleInputChange={handleInputChange}
          submitForm={submitForm}
        />
      )}
    </ScrollView>
  );
}

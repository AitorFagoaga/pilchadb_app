import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BrandForm from "./BrandForm";
import UserForm from "./UserForm";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { registerUser } from '../../../service/userService';
import { Alert } from 'react-native';
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
    username: "",
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

  const handleRegister = async () => {
    const { username, email, password, age } = form;
console.log('form', username, email, password, age);
  
    if (!username || !email || !password || !age) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
  
    try {
      const userData = {
        username: form.username,
        email: form.email,
        password: form.password,
        age: parseInt(form.age),
        isPremium: false,
        isBrand: false,
      };
  
      const responseData = await registerUser(userData); 
      Alert.alert("Éxito", `Usuario registrado: ${responseData.username}`);
      router.push("./LoginScreen");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
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
          submitForm={handleRegister}
        />
      ) : (
        // Formulario de Usuario Persona
        <UserForm
          country={country}
          setCountry={setCountry}
          handleInputChange={handleInputChange}
          submitForm={handleRegister}
        />
      )}
    </ScrollView>
  );
}

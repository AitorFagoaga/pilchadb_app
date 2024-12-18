import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FormInput } from "./components/FormInput";
import { FormPicker } from "./components/FormPicker";

interface UserFormProps {
  country: string;
  setCountry: (value: string) => void;
  handleInputChange: (field: string, value: string) => void;
  submitForm: () => void;
}

export default function UserForm({
  country,
  setCountry,
  handleInputChange,
  submitForm,
}: UserFormProps) {
  const countryOptions = [
    { label: "Selecciona un país", value: "" },
    { label: "Argentina", value: "argentina" },
    { label: "Chile", value: "chile" },
    { label: "Brasil", value: "brasil" },
  ];

  return (
    <>
      <FormInput
        label="Nombre Completo"
        placeholder="Nombre completo"
        onChangeText={(value) => handleInputChange("username", value)}
      />

      <FormInput
        label="Email"
        placeholder="Email"
        onChangeText={(value) => handleInputChange("email", value)}
      />

      <FormInput
        label="Edad"
        placeholder="Edad"
        keyboardType="numeric"
        onChangeText={(value) => handleInputChange("age", value)}
      />

      <FormInput
        label="Contraseña"
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(value) => handleInputChange("password", value)}
      />

      <TouchableOpacity
        className="bg-blue-600 p-4 rounded-lg mt-4"
        onPress={submitForm}
      >
        <Text className="text-white text-center">Crear Usuario</Text>
      </TouchableOpacity>
    </>
  );
}

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "@/components/Logo";
const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    console.log("Intentando iniciar sesión con:", { email, password });
    Alert.alert("Inicio de sesión exitoso", `Bienvenido, ${email}!`);
  };

  return (
    <View className="flex-1 bg-[#121212] justify-center items-center px-8">
      <Logo isLogin={true} />
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute left-4 top-12 z-50"
      >
        <Text className="text-white text-base"> {"<< Volver"}</Text>
      </TouchableOpacity>
      {/* Título */}
      <Text className="text-3xl font-bold text-white mb-8">Iniciar Sesión</Text>

      {/* Input para el Email */}
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full bg-[#1E1E1E] text-white p-4 rounded-lg mb-4"
      />

      {/* Input para la Contrase��a */}
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        className="w-full bg-[#1E1E1E] text-white p-4 rounded-lg mb-8"
      />

      {/* Botón de Login */}
      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.7}
        className="w-full rounded-lg overflow-hidden"
      >
        <LinearGradient
          colors={["#FFD6D6", "#FF0000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-4"
        >
          <Text className="text-white text-center font-bold">Ingresar</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Enlace para Registro */}
      <TouchableOpacity className="mt-4">
        <Text className="text-[#3B82F6] text-sm font-medium">
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

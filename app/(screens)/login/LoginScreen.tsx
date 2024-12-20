import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "@/components/Logo";
import { loginUser } from "../../../service/userService";
import { useAuthStore } from "@/store/useAuthStore";
const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await loginUser({ email, password });
      const token = response.token;
console.log("response",response);

      if (token) {
        login(response); 
        router.push("/");
      } else {
        Alert.alert("Error", "No se recibió un token válido");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
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

      <Text className="text-3xl font-bold text-white mb-8">Iniciar Sesión</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full bg-[#1E1E1E] text-white p-4 rounded-lg mb-4"
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        className="w-full bg-[#1E1E1E] text-white p-4 rounded-lg mb-8"
      />

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

      <TouchableOpacity className="mt-4">
        <Text className="text-[#3B82F6] text-sm font-medium">
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

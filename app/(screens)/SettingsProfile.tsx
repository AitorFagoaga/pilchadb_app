import React from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from 'expo-router';
import Logo from '@/components/Logo';
export default function SettingsProfile() {
  const {logout} = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: () => {
            logout(); // Llama al método de cierre de sesión
            router.replace('/login/LoginScreen'); // Redirige al usuario a la pantalla de login
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className='bg-[#121212]'>
        <TouchableOpacity
              onPress={() => router.back()}
              className="absolute left-4 top-12 z-50"
            >
              <Text className="text-white text-base"> {"<< Volver"}</Text>
            </TouchableOpacity>
            <Logo isLogin={true} />
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
}

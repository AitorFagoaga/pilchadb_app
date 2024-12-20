// authStore.ts

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  token: string | null;
  id: string | null;
  email: string | null;
  username: string | null;
  isPremium: boolean;
  isBrand: boolean;
  isAuthenticated: boolean;
  login: (userData: { token: string; id: string; email: string; username: string; isPremium: boolean; isBrand: boolean }) => void;
  logout: () => void;
  loadSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  id: null,
  email: null,
  username: null,
  isPremium: false,
  isBrand: false,
  isAuthenticated: false,
  login: async (userData) => {
    // Guardar en AsyncStorage
    await AsyncStorage.setItem('authToken', userData.token);
    await AsyncStorage.setItem('userId', userData.id);
    await AsyncStorage.setItem('userEmail', userData.email);
    await AsyncStorage.setItem('userUsername', userData.username);
    await AsyncStorage.setItem('userIsPremium', JSON.stringify(userData.isPremium));
    await AsyncStorage.setItem('userIsBrand', JSON.stringify(userData.isBrand));

    set({
      token: userData.token,
      id: userData.id,
      email: userData.email,
      username: userData.username,
      isPremium: userData.isPremium,
      isBrand: userData.isBrand,
      isAuthenticated: true,
    });
  },
  logout: () => {
    AsyncStorage.removeItem('authToken');
    AsyncStorage.removeItem('userId');
    AsyncStorage.removeItem('userEmail');
    AsyncStorage.removeItem('userUsername');
    AsyncStorage.removeItem('userIsPremium');
    AsyncStorage.removeItem('userIsBrand');
    
    set({
      token: null,
      id: null,
      email: null,
      username: null,
      isPremium: false,
      isBrand: false,
      isAuthenticated: false,
    });
  },
  loadSession: async () => {
    const token = await AsyncStorage.getItem('authToken');
    const id = await AsyncStorage.getItem('userId');
    const email = await AsyncStorage.getItem('userEmail');
    const username = await AsyncStorage.getItem('userUsername');
    const isPremium = await AsyncStorage.getItem('userIsPremium');
    const isBrand = await AsyncStorage.getItem('userIsBrand');

    if (token && id && email && username) {
      set({
        token,
        id,
        email,
        username,
        isPremium: JSON.parse(isPremium || 'false'),
        isBrand: JSON.parse(isBrand || 'false'),
        isAuthenticated: true,
      });
    }
  },
}));

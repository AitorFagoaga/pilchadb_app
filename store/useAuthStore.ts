// authStore.ts

import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  loadSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  login: async (token: string) => {
    await AsyncStorage.setItem('authToken', token);
    set({ token, isAuthenticated: true });
  },
  logout: () => {
    AsyncStorage.removeItem('authToken'); 
    set({ token: null, isAuthenticated: false });
  },
  loadSession: async () => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      set({ token, isAuthenticated: true });
    }
  },
}));

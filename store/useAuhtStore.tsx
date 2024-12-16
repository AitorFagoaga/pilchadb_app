import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean; // Si el usuario está logueado
  user: {
    id: string;
    name: string;
    email: string;
  } | null; // Datos del usuario (opcional)
  token: string | null; // Token de autenticación
  login: (
    user: { id: string; name: string; email: string },
    token: string,
  ) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  token: null,
  login: (user, token) =>
    set({
      isLoggedIn: true,
      user,
      token,
    }),
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      token: null,
    }),
}));

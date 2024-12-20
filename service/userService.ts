// userService.ts

import Constants from 'expo-constants';
import { jwtDecode } from 'jwt-decode';

export interface RegisterUserData {
    username: string;
    email: string;
    password: string;
    age: number;
    isPremium: boolean;
    isBrand: boolean;
  }


  interface TokenPayload {
    sub: string; // ID del usuario
    email: string;
    username?: string;
    exp: number; // Tiempo de expiración
  }

  export interface LoginUserData {
    email: string;
    password: string;
  }

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl ;
console.log("API_BASE_URL",API_BASE_URL);

  export const registerUser = async (userData: RegisterUserData): Promise<any> => {
    console.log("datos",userData);
    
    try {
      const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el usuario');
      }
  
      return await response.json();
    } catch (error: any) {
      throw new Error(error.message || 'Error de red');
    }
  };

  export const loginUser = async (loginData: LoginUserData): Promise<{ token: string, id: string, email: string, username: string, isPremium: boolean, isBrand: boolean }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const responseBody = await response.json();
  
      if (!response.ok) {
        throw new Error(responseBody.message || 'Error al iniciar sesión');
      }

      return {
        token: responseBody.token,
        id: responseBody.id,
        email: responseBody.email,
        username: responseBody.username,
        isPremium: responseBody.premium,
        isBrand: responseBody.brand,
      };
    } catch (error: any) {
      throw new Error(error.message || 'Error de red');
    }
  };

  export const decodeToken = (token: string): TokenPayload => {
    return jwtDecode<TokenPayload>(token);
  };
  
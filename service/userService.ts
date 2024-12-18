// userService.ts

import Constants from 'expo-constants';

export interface RegisterUserData {
    username: string;
    email: string;
    password: string;
    age: number;
    isPremium: boolean;
    isBrand: boolean;
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
      const response = await fetch(`${API_BASE_URL}/register`, {
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

  export const loginUser = async (userData: LoginUserData): Promise<any> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const responseText = await response.text();
      console.log('Respuesta del servidor:', responseText);
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseText}`);
      }
  
      return JSON.parse(responseText);
    } catch (error: any) {
      throw new Error(error.message || 'Error de red');
    }
  };
  
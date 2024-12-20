// userService.ts

import Constants from 'expo-constants';
import { jwtDecode } from 'jwt-decode';


  export interface FavoriteData {
    userId: number;
    brandId: number;
  }

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl ;

  export const favoriteCreation = async (favoriteData: FavoriteData, token: string): Promise<{ brand: any; user: any}> => {
    
    try {
        console.log('favoriteData', favoriteData);
        
      const response = await fetch(`${API_BASE_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(favoriteData),
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Error al registrar el usuario');
      }
  
      return await response.json();
    } catch (error: any) {
      throw new Error(error || 'Error de red');
    }
  };

  export const deleteFavorite = async (
    favoriteData: FavoriteData,
    token: string
  ): Promise<{ brand: any; user: any}> => {
    try {
      const response = await fetch(`${API_BASE_URL}/favorites`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(favoriteData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(errorData.message || "Error al eliminar favorito");
      }
  
      const data = await response.json();
      console.log("Respuesta del servidor al eliminar favorito:", data);
      return data;
    } catch (error: any) {
      console.error("Error al eliminar favorito:", error.message);
      throw new Error(error.message || "Error de red");
    }
  };

  export const getUserFavorites = async (userId: number, token: string): Promise<number[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/favorites/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener los favoritos del usuario');
      }
  
      const data: { brandIds: number[] } = await response.json();
      return data.brandIds; 
    } catch (error: any) {
      throw new Error(error.message || 'Error de red');
    }
  };
  
  
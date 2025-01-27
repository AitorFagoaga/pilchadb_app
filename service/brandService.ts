import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl;

/**
 * Busca marcas en el backend usando el término ingresado por el usuario.
 *
 * @param query Término de búsqueda ingresado por el usuario.
 * @returns Una lista de marcas que coinciden con el término.
 */

export interface BrandDTO {
  id: number;
  name: string;
  description: string;
  websiteUrl: string;
  instagramUrl: string;
  logoImg: string;
  country: string;
  brandCategoryNames: string[];
}

export const searchBrands = async (query: string): Promise<any[]> => {
  try {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
console.log('params', params.toString);

    const response = await fetch(`${API_BASE_URL}/brands/search?name=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al buscar marcas');
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Error de red');
  }
};

export const getAllBrands = async (): Promise<BrandDTO[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || "Error al obtener todas las marcas");
    }

    const brands: BrandDTO[] = await response.json();
    return brands;
  } catch (error: any) {
    console.error("Error al obtener todas las marcas:", error.message);
    throw new Error(error.message || "Error de red");
  }
};
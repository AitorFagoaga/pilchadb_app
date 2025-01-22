import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl;

/**
 * Busca marcas en el backend usando el término ingresado por el usuario.
 *
 * @param query Término de búsqueda ingresado por el usuario.
 * @returns Una lista de marcas que coinciden con el término.
 */
export const searchBrands = async (query: string): Promise<any[]> => {
  try {
    const params = new URLSearchParams();
    if (query) params.append('query', query);

    const response = await fetch(`${API_BASE_URL}/brands/search?${params.toString()}`, {
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

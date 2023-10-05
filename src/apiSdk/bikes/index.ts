import queryString from 'query-string';
import { BikeInterface, BikeGetQueryInterface } from 'interfaces/bike';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBikes = async (query?: BikeGetQueryInterface): Promise<PaginatedInterface<BikeInterface>> => {
  return fetcher('/api/bikes', {}, query);
};

export const createBike = async (bike: BikeInterface) => {
  return fetcher('/api/bikes', { method: 'POST', body: JSON.stringify(bike) });
};

export const updateBikeById = async (id: string, bike: BikeInterface) => {
  return fetcher(`/api/bikes/${id}`, { method: 'PUT', body: JSON.stringify(bike) });
};

export const getBikeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/bikes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBikeById = async (id: string) => {
  return fetcher(`/api/bikes/${id}`, { method: 'DELETE' });
};

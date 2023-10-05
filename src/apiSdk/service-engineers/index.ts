import queryString from 'query-string';
import { ServiceEngineerInterface, ServiceEngineerGetQueryInterface } from 'interfaces/service-engineer';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceEngineers = async (
  query?: ServiceEngineerGetQueryInterface,
): Promise<PaginatedInterface<ServiceEngineerInterface>> => {
  return fetcher('/api/service-engineers', {}, query);
};

export const createServiceEngineer = async (serviceEngineer: ServiceEngineerInterface) => {
  return fetcher('/api/service-engineers', { method: 'POST', body: JSON.stringify(serviceEngineer) });
};

export const updateServiceEngineerById = async (id: string, serviceEngineer: ServiceEngineerInterface) => {
  return fetcher(`/api/service-engineers/${id}`, { method: 'PUT', body: JSON.stringify(serviceEngineer) });
};

export const getServiceEngineerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-engineers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceEngineerById = async (id: string) => {
  return fetcher(`/api/service-engineers/${id}`, { method: 'DELETE' });
};

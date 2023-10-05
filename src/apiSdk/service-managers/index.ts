import queryString from 'query-string';
import { ServiceManagerInterface, ServiceManagerGetQueryInterface } from 'interfaces/service-manager';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceManagers = async (
  query?: ServiceManagerGetQueryInterface,
): Promise<PaginatedInterface<ServiceManagerInterface>> => {
  return fetcher('/api/service-managers', {}, query);
};

export const createServiceManager = async (serviceManager: ServiceManagerInterface) => {
  return fetcher('/api/service-managers', { method: 'POST', body: JSON.stringify(serviceManager) });
};

export const updateServiceManagerById = async (id: string, serviceManager: ServiceManagerInterface) => {
  return fetcher(`/api/service-managers/${id}`, { method: 'PUT', body: JSON.stringify(serviceManager) });
};

export const getServiceManagerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/service-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteServiceManagerById = async (id: string) => {
  return fetcher(`/api/service-managers/${id}`, { method: 'DELETE' });
};

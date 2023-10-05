import queryString from 'query-string';
import { AppointmentInterface, AppointmentGetQueryInterface } from 'interfaces/appointment';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAppointments = async (
  query?: AppointmentGetQueryInterface,
): Promise<PaginatedInterface<AppointmentInterface>> => {
  return fetcher('/api/appointments', {}, query);
};

export const createAppointment = async (appointment: AppointmentInterface) => {
  return fetcher('/api/appointments', { method: 'POST', body: JSON.stringify(appointment) });
};

export const updateAppointmentById = async (id: string, appointment: AppointmentInterface) => {
  return fetcher(`/api/appointments/${id}`, { method: 'PUT', body: JSON.stringify(appointment) });
};

export const getAppointmentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/appointments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAppointmentById = async (id: string) => {
  return fetcher(`/api/appointments/${id}`, { method: 'DELETE' });
};

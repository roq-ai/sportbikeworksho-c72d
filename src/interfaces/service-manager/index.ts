import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface ServiceManagerInterface {
  id?: string;
  user_id: string;
  appointment_id: string;
  experience: number;
  management_level: string;
  availability: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface ServiceManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  appointment_id?: string;
  management_level?: string;
  availability?: string;
}

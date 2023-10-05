import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface ServiceEngineerInterface {
  id?: string;
  user_id: string;
  appointment_id: string;
  experience: number;
  specialization: string;
  availability: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface ServiceEngineerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  appointment_id?: string;
  specialization?: string;
  availability?: string;
}

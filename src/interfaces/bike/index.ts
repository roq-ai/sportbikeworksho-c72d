import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BikeInterface {
  id?: string;
  user_id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  vin_number: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface BikeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  make?: string;
  model?: string;
  color?: string;
  vin_number?: string;
}

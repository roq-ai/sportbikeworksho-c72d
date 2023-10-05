import { ServiceEngineerInterface } from 'interfaces/service-engineer';
import { ServiceManagerInterface } from 'interfaces/service-manager';
import { UserInterface } from 'interfaces/user';
import { BikeInterface } from 'interfaces/bike';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  user_id: string;
  bike_id: string;
  date: any;
  time: any;
  status: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;
  service_engineer?: ServiceEngineerInterface[];
  service_manager?: ServiceManagerInterface[];
  user?: UserInterface;
  bike?: BikeInterface;
  _count?: {
    service_engineer?: number;
    service_manager?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  bike_id?: string;
  status?: string;
  notes?: string;
}

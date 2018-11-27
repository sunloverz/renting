import {Customer} from './customer';
import { Equipment } from './equipment';

export class Rent {
  id: number;
  status: string;
  rent_type: string;
  start_date: string;
  end_date: string;
  price: number;
  paid: number;
  discount: number;
  customer_id: number;
  duration: number;
  total_price: number;
  subtotal_price: number;
  customer: Customer;
  equipments: Equipment[];
}

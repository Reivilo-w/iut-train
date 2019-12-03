import { IFare } from './IFare';
import { IRoute } from './IRoute';

export interface IReservation {
  route: IRoute[];
  fare: IFare;
  departureIndex: number;
  arrivalIndex: number;
  date: Date;
  customer: string;
}
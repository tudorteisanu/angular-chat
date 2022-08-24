import { AlertType } from '@/ts/enum';

export interface AlertInterface {
  id: number;
  message: string;
  title: string;
  type: AlertType;
}

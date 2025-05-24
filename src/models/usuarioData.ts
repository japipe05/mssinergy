import { RowDataPacket } from 'mysql2';

export interface DBUser extends RowDataPacket {
  usr_id: number;
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
}

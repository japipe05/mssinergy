import { RowDataPacket } from 'mysql2';

export interface DBUser extends RowDataPacket {
    usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
  usr_codigo_pais: string;
  usr_celular: string;
  usr_estado: string;
  usr_ROL: string;
  usr_fecha_creacion: string;
}

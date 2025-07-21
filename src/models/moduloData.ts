import { RowDataPacket } from 'mysql2';

export interface DBModulo extends RowDataPacket {
  mod_id: number;
  mod_nombre: string;
  mod_descripcion: string;
  usr_usuario_aud: string;
  usr_fecha_aud: string;
}

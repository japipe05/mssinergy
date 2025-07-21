import { RowDataPacket } from 'mysql2';

export interface DBAccess extends RowDataPacket {
  acc_id?: number;
  usr_id: number;
  usr_modulo: string;
  usr_descripcion: string;

  usr_insertar?: 'S' | 'N';
  usr_actualizar?: 'S' | 'N';
  usr_eliminar?: 'S' | 'N';
  usr_lectura?: 'S' | 'N';
  usr_usuario_aud: string;
  usr_fecha_aud?: Date; 
}

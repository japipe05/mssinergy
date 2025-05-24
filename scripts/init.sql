
CREATE TABLE IF NOT EXISTS usuarios (
    usr_id INT AUTO_INCREMENT PRIMARY KEY,
    usr_fotografia VARCHAR(100) NOT NULL,
    usr_nombre VARCHAR(100) NOT NULL,
    usr_correo VARCHAR(100) NOT NULL UNIQUE,
    usr_codigo_pais VARCHAR(100) NOT NULL,
    usr_celular VARCHAR(100) NOT NULL,
    usr_credencial VARCHAR(255) NOT NULL,
    usr_estado VARCHAR(255) default 'ACTIVO',
    usr_ROL VARCHAR(255) default 'USER',
    usr_fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuarios_aud (
    aud_id INT AUTO_INCREMENT PRIMARY KEY,
    usr_id INT,
    usr_fotografia VARCHAR(100) ,
    usr_nombre VARCHAR(100)  ,
    usr_correo VARCHAR(100)   ,
    usr_codigo_pais VARCHAR(100)   ,
    usr_celular VARCHAR(100)   ,
    usr_credencial VARCHAR(255)  ,
    usr_estado VARCHAR(255),
    usr_ROL VARCHAR(255),
    usr_fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS accesos (
  acc_id INT AUTO_INCREMENT PRIMARY KEY,
  usr_correo VARCHAR(100) NOT NULL,
  usr_modulo VARCHAR(100) NOT NULL,
  usr_insertar VARCHAR(3) NOT NULL default 'N',
  usr_actualizar VARCHAR(3) NOT NULL default 'N',
  usr_eliminar VARCHAR(3) NOT NULL default 'N',
  usr_lectura VARCHAR(3) NOT NULL default 'N',
  usr_usuario_aud VARCHAR(100) NOT NULL,
  usr_fecha_aud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS accesos_aud (
  acc_id INT AUTO_INCREMENT PRIMARY KEY,
  usr_usuario VARCHAR(100) ,
  usr_modulo VARCHAR(100) ,
  usr_insertar VARCHAR(3) ,
  usr_actualizar VARCHAR(3) ,
  usr_eliminar VARCHAR(3),
  usr_lectura VARCHAR(3) ,
  usr_usuario_aud VARCHAR(100),
  usr_fecha_aud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


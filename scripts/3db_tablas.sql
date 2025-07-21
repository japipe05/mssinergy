
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
  usr_id INT,
  usr_modulo VARCHAR(100) NOT NULL,
  usr_descripcion VARCHAR(255) NOT NULL,
  mod_ruta VARCHAR(255) NOT NULL,
  usr_insertar VARCHAR(3) NOT NULL DEFAULT 'N',
  usr_actualizar VARCHAR(3) NOT NULL DEFAULT 'N',
  usr_eliminar VARCHAR(3) NOT NULL DEFAULT 'N',
  usr_lectura VARCHAR(3) NOT NULL DEFAULT 'N',
  usr_usuario_aud VARCHAR(100) NOT NULL,
  usr_fecha_aud TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uniq_usr_modulo (usr_id, usr_modulo) 
);


CREATE TABLE IF NOT EXISTS accesos_aud (
  aud_id INT AUTO_INCREMENT PRIMARY KEY,
  acc_id INT,
  usr_id INT,
  usr_usuario VARCHAR(100) ,
  usr_modulo VARCHAR(100) ,
  usr_descripcion VARCHAR(255),
  mod_ruta VARCHAR(255),
  usr_insertar VARCHAR(3) ,
  usr_actualizar VARCHAR(3) ,
  usr_eliminar VARCHAR(3),
  usr_lectura VARCHAR(3) ,
  usr_usuario_aud VARCHAR(100),
  usr_fecha_aud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS modulos (
  mod_id INT AUTO_INCREMENT PRIMARY KEY,
  mod_nombre VARCHAR(100) NOT NULL,
  mod_descripcion VARCHAR(255) NOT NULL,
  mod_ruta VARCHAR(255) NOT NULL,
  usr_usuario_aud VARCHAR(100) NOT NULL,
  usr_fecha_aud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS modulos_aud (
   aud_id INT AUTO_INCREMENT PRIMARY KEY,
  mod_id INT,
  mod_nombre VARCHAR(100) ,
  mod_descripcion VARCHAR(255),
  mod_ruta VARCHAR(255),
  usr_usuario_aud VARCHAR(100),
  usr_fecha_aud TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS blogs (
  blg_id INT AUTO_INCREMENT PRIMARY KEY,
  blg_title VARCHAR(255) NOT NULL,
  blg_content LONGTEXT NOT NULL,
  blg_category VARCHAR(100),
  blg_coverImg VARCHAR(255),
  blg_author VARCHAR(100),
  blg_videoUrl VARCHAR(255),
  blg_createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS blogs_aud (
  aud_id INT AUTO_INCREMENT PRIMARY KEY,
  blg_id INT,
  blg_title VARCHAR(255) ,
  blg_content LONGTEXT ,
  blg_category VARCHAR(100),
  blg_coverImg VARCHAR(255),
  blg_author VARCHAR(100),
  blg_videoUrl VARCHAR(255),
  blg_createdAt TIMESTAMP
);

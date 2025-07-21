INSERT INTO `usuarios` (
  `usr_id`,
  `usr_fotografia`,
  `usr_nombre`,
  `usr_correo`,
  `usr_codigo_pais`,
  `usr_celular`,
  `usr_credencial`,
  `usr_estado`,
  `usr_ROL`,
  `usr_fecha_creacion`
) VALUES
(NULL, 'foto1.jpg', 'Juan Pérez', 'juan.perez@example.com', '+57', '3123456789', 'Password123', 'ACTIVO', 'USER', CURRENT_TIMESTAMP()),
(NULL, 'foto2.jpg', 'María Gómez', 'maria.gomez@example.com', '+54', '2987654321', 'Secure456', 'INACTIVO', 'ADMIN', CURRENT_TIMESTAMP()),
(NULL, 'foto3.jpg', 'Carlos Ruiz', 'carlos.ruiz@example.com', '+52', '3312345678', 'Pass789Word', 'ACTIVO', 'AUDITOR', CURRENT_TIMESTAMP()),
(NULL, 'foto4.jpg', 'Laura Díaz', 'laura.diaz@example.com', '+57', '3219876543', 'Admin1234', 'ACTIVO', 'USER', CURRENT_TIMESTAMP()),
(NULL, 'foto5.jpg', 'Pedro Torres', 'pedro.torres@example.com', '+1', '4561237890', 'Qwerty321', 'INACTIVO', 'GUEST', CURRENT_TIMESTAMP()),
(NULL, 'foto6.jpg', 'Ana López', 'ana.lopez@example.com', '+57', '3104567890', 'AnaPwd2024', 'ACTIVO', 'SUPPORT', CURRENT_TIMESTAMP()),
(NULL, 'foto7.jpg', 'Luis Martínez', 'luis.martinez@example.com', '+52', '3411122233', 'Lu1s2023', 'ACTIVO', 'ADMIN', CURRENT_TIMESTAMP()),
(NULL, 'foto8.jpg', 'Elena Castro', 'elena.castro@example.com', '+54', '2998877665', 'Elena@123', 'INACTIVO', 'USER', CURRENT_TIMESTAMP()),
(NULL, 'foto9.jpg', 'Diego Vega', 'diego.vega@example.com', '+1', '9876543210', 'D1eg0Pass', 'ACTIVO', 'AUDITOR', CURRENT_TIMESTAMP()),
(NULL, 'foto10.jpg', 'Valentina Ríos', 'valentina.rios@example.com', '+57', '3130001122', 'Valen2025!', 'ACTIVO', 'SUPPORT', CURRENT_TIMESTAMP());

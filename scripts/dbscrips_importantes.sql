SHOW PROCESSLIST;
SELECT CONCAT('KILL ', Id, ';') AS kill_command
FROM INFORMATION_SCHEMA.PROCESSLIST
WHERE USER = 'u208195001_admin_desa' AND COMMAND = 'Sleep';


DELIMITER //

CREATE or replace PROCEDURE KillInactiveUserSessions(IN p_user_name VARCHAR(255))
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE session_id BIGINT;
    DECLARE cur CURSOR FOR
        SELECT Id
        FROM INFORMATION_SCHEMA.PROCESSLIST
        WHERE USER = p_user_name AND COMMAND = 'Sleep'; -- Solo sesiones inactivas
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO session_id;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Intenta matar la sesión
        -- Es posible que la sesión ya se haya cerrado (ERROR 1094), lo cual es normal.
        -- Usamos un handler para ignorar ese error específico.
        BEGIN
            DECLARE CONTINUE HANDLER FOR SQLSTATE 'HY000' SET @dummy = 0; -- Para ERROR 1094

            -- Ejecuta el comando KILL
            SET @kill_sql = CONCAT('KILL ', session_id);
            PREPARE stmt FROM @kill_sql;
            EXECUTE stmt;
            DEALLOCATE PREPARE stmt;
            -- Puedes añadir un SELECT CONCAT('Killed session: ', session_id); si quieres ver la salida
        END;
    END LOOP;

    CLOSE cur;
END //

DELIMITER ;


CALL KillInactiveUserSessions('u208195001_admin_desa');
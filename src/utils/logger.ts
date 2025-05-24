import fs from 'fs';
import path from 'path';
import pino from 'pino';

const isDev = process.env.NODE_ENV === 'development';
const logDir = path.resolve(process.cwd(), 'logs');
const logFilePath = path.join(logDir, 'app.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const logger = isDev && !process.env.NEXT_RUNTIME
  ? pino({
      transport: {
        targets: [
          {
            target: 'pino-pretty',
            options: {
              colorize: false,
              singleLine: true,
              messageFormat: '{msg}',
              ignore: 'pid,hostname',
              translateTime: 'yyyy/MM/dd HH:mm',
            },
          },
          {
            target: 'pino/file',
            options: {
              destination: logFilePath,
              mkdir: true,
            },
          },
        ],
      },
    })
  : pino({
      timestamp: () => `,"time":"${new Date().toISOString().replace('T', ' ').slice(0, 16)}"`,
      base: null,
    }, pino.destination(logFilePath));

export default logger;

import pino from 'pino';

export const loggerFactory = (pid) => pino({
  transport: {
    target: 'pino-pretty',
    worker: pid
  },
  level: 'debug'
});
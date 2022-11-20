import { Worker } from 'node:worker_threads';
import { loggerFactory } from './logger.js';

const logger = loggerFactory(process.pid);D

const worker = new Worker('./thread.js');

worker.postMessage('Calcular PI');
worker.postMessage('Verificar se X é primo');
worker.on('message', (value) => {
  logger.info('IHA!');
  logger.debug(value);
});

worker.on('error', (err) => {
  logger.fatal(err);
  worker.terminate();
});

import { parentPort, threadId } from 'node:worker_threads';
import { loggerFactory } from './logger.js';

const logger = loggerFactory(threadId);

let counter = 1;

parentPort.on('message', (msg) => {
  logger.info('Executando -> ' + msg);
  parentPort.postMessage('processado!');
  if(counter == 2) {
    throw new Error();
  }
  counter++;
});

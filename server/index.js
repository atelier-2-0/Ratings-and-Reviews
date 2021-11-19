import database from './database.js';
import makeApp from './app.js';
import { jest } from '@jest/globals';

const createUser = jest.fn();
const getUser = jest.fn();

const app = makeApp({
  createUser,
  getUser,
});

app.listen(8080, () => console.log('listening on port 3000'));

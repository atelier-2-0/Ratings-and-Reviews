import supertest from 'supertest';
import makeApp from './app.js';

const app = makeApp;

// post example test suite
describe('POST /users', () => {

  beforeEach(() => {
    createUser.mockReset();
  });
  // passing case
  describe('given a username and password', () => {
    test('should save the username and password to the database', () => {
      await request(app).post('/users').send({
        username: 'username',
        password: 'password'
      });
      expect(createUser.mock.calls.length).toBe(1);
    });

    test('should respond with a 200 status code', async() => {
      const response = await request(app).post('/users').send({
        username: 'username',
        password: 'password'
      });
      expect(response.statusCode).toBe(200);
    });

    test('should specfiy json in the content type header', async() => {
      const response = await request(app).post('/users').send({
        username: 'username',
        password: 'password'
      });
      expect(response.headers['content-type']).toBe(expect.stringContaining('json'));
    });
  });

  // failing case
  describe('when the username or password is missing', () => {
    test('should respond with a status code of 400', async() => {
      const response = await request(app).post('/users').send({
        username: 'username'
      });
      expect(response.statusCode).toBe(400);
    })
  });
})

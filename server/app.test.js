import request from 'supertest';
import app from './app';

describe('GET endpoint "/"', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

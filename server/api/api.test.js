import request from 'supertest';
import app from './api.js';

describe('GET reviews from "/reviews"', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/reviews/');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST review to "/reviews"', () => {
  it('should respond with a 201 status code', async () => {
    const response = await request(app).post('/reviews/');
    expect(response.statusCode).toBe(201);
  });
});

describe('UPDATE review helpfulness to "/reviews/:reviewid/helpful"', () => {
  it('should respond with a 204 status code', async () => {
    const review_id = 356407;
    const response = await request(app).put(`/reviews/${review_id}/helpful`);
    expect(response.statusCode).toBe(204);
  });
});

describe('UPDATE review report status to "/reviews/:reviewid/report"', () => {
  it('should respond with a 204 status code', async () => {
    const review_id = 356407;
    const response = await request(app).put(`/reviews/${review_id}/helpful`);
    expect(response.statusCode).toBe(204);
  });
});

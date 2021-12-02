import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '1m', target: 1 },
    { duration: '1m', target: 10 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 1000 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const port = 3000;
  const randomPage = Math.floor(Math.random() * 11);
  const randomCount = Math.floor(Math.random() * 20);
  const randomProductId = Math.floor(Math.random() * 1000000) + 900000;

  const url = `http://localhost:${port}/reviews?product_id=${randomProductId}&page=${randomPage}&count=${randomCount}`;

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(http.get(url, params), {
    'status is 200': (r) => r.status === 200,
  }) || errorRate.add(1);
}

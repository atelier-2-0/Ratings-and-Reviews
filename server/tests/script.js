/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import {
  jUnit,
  textSummary,
} from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export default function () {
  const port = 3000;
  const productId = 61800;
  const page = 1;
  const count = 10;
  const url = `http://localhost:${port}/reviews?product_id=${productId}&page=${page}&count=${count}`;

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.get(url, params);
}

/* *************************************************** */

// export const options = { vus: 1, iterations: 5 };

// export function handleSummary(data) {
//   console.log('Preparing the end-of-test summary...');
//   const dateStamp = new Date().toLocaleString('en-US', {
//     timeZone: 'America/Los_Angeles',
//   });
//   const summaryFile = `../k6/${dateStamp}summary.json`;
//   return {
//     stdout: textSummary(data, { indent: ' ', enableColors: true }), // Show the text summary to stdout...
//     summaryFile: JSON.stringify(data), // and a JSON with all the details...
//     // And any other JS transformation of the data you can think of,
//     // you can write your own JS helpers to transform the summary data however you like!
//   };
// }

/* *************************************************** */

// import http from 'k6/http';
// import { sleep } from 'k6';

// export const options = {
//   vus: 10,
//   duration: '30s',
//   stages: [
//     { duration: '30s', target: 20 },
//     { duration: '1m30s', target: 10 },
//     { duration: '20s', target: 0 },
//   ],
// };

// export default function () {
//   http.get('http://localhost:3000/reviews?product_id=61800');
//   sleep(1);
// }

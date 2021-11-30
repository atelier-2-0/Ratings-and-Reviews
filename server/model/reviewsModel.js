import pool from '../../database/db.js';

export const listReviews = (reqQuery, callback) => {
  // need to add query to add photos
  const {
    page, count, sort, product_id,
  } = reqQuery;

  // const query = 'SELECT reviews.review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos.id, photos.url FROM reviews LEFT OUTER JOIN photos ON reviews.id = photos.review_id WHERE product_id = $1 LIMIT $2;';
  // const query = 'SELECT * FROM reviews WHERE product_id = ? ORDER BY ? ASC, date DESC LIMIT ?;'; /*, sort, count*/

  const query = 'SELECT review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness FROM reviews WHERE product_id = $1 LIMIT $2;';
  pool.query(query, [product_id, count || 5], async (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const rows = {
        product: product_id,
        page: page || 0,
        count: count || 5,
        results: [
          ...results.rows,
        ],
      };
      // const arrayOfPhotos = [];

      // rows.results.forEach((review) => {
      //   if (review.id) {
      //     const photos = {
      //       id: review.id,
      //       url: review.url,
      //     };
      //     arrayOfPhotos.push(photos);
      //     review.photos = arrayOfPhotos;
      //   }
      // });
      callback(null, rows);
    }
  });
};

export const retrieveMetadata = async (reqQuery, callback) => {
  const { product_id } = reqQuery;
  console.log('reqQuery', reqQuery);

  // const query = 'SELECT * FROM reviews WHERE product_id = $1;';

  const executeAllQueries = async () => {
    const query_rating_1 = 'SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND rating = 1';
    const query_rating_2 = 'SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND rating = 2;';
    const query_rating_3 = 'SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND rating = 3;';
    const query_rating_4 = 'SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND rating = 4;';
    const query_rating_5 = 'SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND rating = 5;';

    const rating_1 = await pool.query(query_rating_1, [product_id], (error, results) => {
      if (error) {
        console.log('query rating_1 failed', error);
      } else {
        console.log('query rating_1 is done', results.rows[0].count);
        return results.rows[0].count;
      }
    });

    const rating_2 = await pool.query(query_rating_2, [product_id], (error, results) => {
      if (error) {
        console.log('query rating_2 failed', error);
      } else {
        console.log('query rating_2 is done', results.rows[0].count);
        return results.rows[0].count;
      }
    });

    const rating_3 = await pool.query(query_rating_3, [product_id], (error, results) => {
      if (error) {
        console.log('query rating_3 failed', error);
      } else {
        console.log('query rating_3 is done', results.rows[0].count);
        return results.rows[0].count;
      }
    });

    const rating_4 = await pool.query(query_rating_4, [product_id], (error, results) => {
      if (error) {
        console.log('query rating_4 failed', error);
      } else {
        console.log('query rating_4 is done', results.rows[0].count);
        return results.rows[0].count;
      }
    });

    const rating_5 = await pool.query(query_rating_5, [product_id], (error, results) => {
      if (error) {
        console.log('query rating_5 failed', error);
      } else {
        console.log('query rating_5 is done', results.rows[0].count);
        return results.rows[0].count;
      }
    });

    const allRatings = await Promise.all([rating_1, rating_2, rating_3, rating_4, rating_5]);
    return allRatings;
  };

  executeAllQueries()
    .then((results) => {
      console.log('results', results);
      const meta = {
        product_id,
        ratings: {
          1: results[0],
          2: results[1],
          3: results[2],
          4: results[3],
          5: results[4],
        },
      // recommended: {
      //   false: 0,
      //   true: 0,
      // },
      // characteristics: {
      //   [characteristic]: {
      //     id: 0,
      //     value: 0,
      //   },
      // },
      };
      callback(null, meta);
    })
    .catch((error) => {
      callback(error, null);
    });
  // if (error) {
  //   callback(error, null);
  // } else {
  //   // const rows = {
  //   //   product_id,
  //   //   ratings: {
  //   //     1: 0,
  //   //     2: 0,
  //   //     3: 0,
  //   //     4: 0,
  //   //     5: 0,
  //   //   },
  //   //   recommended: {
  //   //     false: 0,
  //   //     true: 0,
  //   //   },
  //   //   characteristics: {
  //   //     [characteristic]: {
  //   //       id: 0,
  //   //       value: 0,
  //   //     },
  //   //   },
  //   // };
  //   callback(null, results.rows);
  // }
};

export const addReview = (data, callback) => {
  const {
    product_id, rating, summary, body, recommend,
    name, email, photos, characteristics,
  } = data;
  const date = new Date();

  const insertIntoReviews = 'INSERT INTO reviews(product_id, rating, summary, body, recommend, reviewer_name, reviewer_email, date, reported, helpfulness) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);';
  const insertIntoCharacteristics = 'INSERT INTO reviews(product_id, rating, summary, body, recommend, name, email) values($1, $2, $3, $4, $5, $6, $7, $8);';
  const insertIntoPhotos = 'INSERT INTO photos(review_id, url) values($1, $2);';

  pool.query(insertIntoReviews, [product_id, rating, summary, body, recommend, name, email, date.valueOf(), false, 0], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      console.log('results', results);
      // pool.query(insertIntoPhotos, [])
    }
  });
};

export const updateHelpfulness = (reqQuery, callback) => {
  const { review_id } = reqQuery;

  const query = 'UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = $1';

  pool.query(query, [review_id], (error) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, 'No Content');
    }
  });
};

export const markAsReported = (reqQuery, callback) => {
  const { review_id } = reqQuery;

  const query = 'UPDATE reviews SET reported = true WHERE id = $1';

  pool.query(query, [review_id], (error) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, 'No Content');
    }
  });
};

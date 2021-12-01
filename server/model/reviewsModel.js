import pool from '../../database/db.js';

export const listReviews = (reqQuery, callback) => {
  // need to add query to add photos and allow for sorting
  const {
    page = 1, count = 5, sort, product_id,
  } = reqQuery;

  const retrieveAllReviews = 'SELECT review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness FROM reviews WHERE product_id = $1 LIMIT $2;';

  pool.query(retrieveAllReviews, [product_id, count], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      const rows = {
        product: product_id,
        page,
        count,
        results: [
          ...results.rows,
        ],
      };
      callback(null, rows);
    }
  });
};

export const addReview = (data, callback) => {
  const {
    product_id, rating, summary, body, recommend,
    name, email, photos, characteristics,
  } = data;

  const date = new Date();

  const insertIntoReviews = 'INSERT INTO reviews(product_id, rating, summary, body, recommend, reviewer_name, reviewer_email, date, reported, helpfulness) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING review_id;';

  pool.query(insertIntoReviews, [product_id, rating, summary, body, recommend, name, email, date.valueOf(), false, 0], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, `Created ${results.rows[0].review_id}`);
    }
  });
};

export const updateHelpfulness = (reqQuery, callback) => {
  const { review_id } = reqQuery;

  const markReviewAsHelpful = 'UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = $1';

  pool.query(markReviewAsHelpful, [review_id], (error) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, 'No Content');
    }
  });
};

export const markAsReported = (reqQuery, callback) => {
  const { review_id } = reqQuery;

  const reportReview = 'UPDATE reviews SET reported = true WHERE id = $1';

  pool.query(reportReview, [review_id], (error) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, 'No Content');
    }
  });
};

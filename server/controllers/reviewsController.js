import {
  listReviews,
  addReview,
  updateHelpfulness,
  markAsReported,
}
  from '../model/reviewsModel.js';

export const getReviews = (req, res) => {
  listReviews(req.query, (err, results) => {
    if (err) {
      console.log('error getting reviews...', err);
      res.status(500).send('error getting reviews');
    }
    res.status(200).send(results);
  });
};

export const postReview = (req, res) => {
  addReview(req.body, (err, results) => {
    if (err) {
      console.log('error posting review...', err);
      res.status(500).send('error posting reviews');
    }
    res.status(201).send(results);
  });
};

export const markAsHelpful = (req, res) => {
  updateHelpfulness(req.params, (err, results) => {
    if (err) {
      console.log('error marking review as helpful...', err);
      res.status(500).send('error marking review as helpful');
    }
    res.status(204).send(results);
  });
};

export const reportReview = (req, res) => {
  markAsReported(req.params, (err, results) => {
    if (err) {
      console.log('error reporting review...', err);
      res.status(500).send('error reporting review');
    }
    res.status(204).send(results);
  });
};

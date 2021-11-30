import {
  listReviews,
  retrieveMetadata,
  addReview,
  updateHelpfulness,
  markAsReported,
}
  from '../model/reviewsModel.js';

export const getReviews = (req, res) => {
  listReviews(req.query, (err, results) => {
    if (err) {
      console.log('error getting reviews...', err);
    }
    res.status(200).send(results);
  });
};

export const getMetadata = (req, res) => {
  retrieveMetadata(req.query, (err, results) => {
    if (err) {
      console.log('error getting metadata...', err);
    }
    res.status(201).send(results);
  });
};

export const postReview = (req, res) => {
  addReview(req.body, (err, results) => {
    if (err) {
      console.log('error posting review...', err);
    }
    res.send(results);
  });
};

export const markAsHelpful = (req, res) => {
  updateHelpfulness(req.params, (err, results) => {
    if (err) {
      console.log('error marking review as helpful...', err);
    }
    res.status(204).send(results);
  });
};

export const reportReview = (req, res) => {
  markAsReported(req.params, (err, results) => {
    if (err) {
      console.log('error reporting review...', err);
    }
    res.status(204).send(results);
  });
};

import {
  listReviews,
  retrieveMetadata,
  addReview,
  updateHelpfulness,
  markAsReported,
}
  from '../model/reviewsModel.js';

export const getReviews = (req, res) => {
  listReviews(req.params, (err, results) => {
    if (err) {
      console.log('error getting reviews...', err);
    }
    res.send(results);
  });
};

export const getMetadata = (req, res) => {
  retrieveMetadata(req.params, (err, results) => {
    if (err) {
      console.log('error getting metadata...', err);
    }
    res.send(results);
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
    res.send(results);
  });
};

export const reportReview = (req, res) => {
  markAsReported(req.params, (err, results) => {
    if (err) {
      console.log('error reporting review...', err);
    }
    res.send(results);
  });
};

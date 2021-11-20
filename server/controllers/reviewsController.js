import {
  listReviews,
  retrieveMetadata,
  addReview,
  updateHelpfulness,
  markAsReported,
}
  from '../model/reviewsModel.js';

export const getReviews = (req, res) => {
  listReviews(req.params);
};

export const getMetadata = (req, res) => {
  retrieveMetadata(req.params);
};

export const postReview = (req, res) => {
  addReview(req.body);
};

export const markAsHelpful = (req, res) => {
  updateHelpfulness(req.params);
};

export const reportReview = (req, res) => {
  markAsReported(req.params);
};

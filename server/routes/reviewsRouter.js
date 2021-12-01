import express from 'express';
import {
  getReviews,
  postReview,
  markAsHelpful,
  reportReview,
} from '../controllers/reviewsController.js';

const reviewsRouter = express.Router();

/* GET requests: List Reviews and Get Review Metadata */
reviewsRouter.get('/', getReviews);

/* POST request: Add a Review */
reviewsRouter.post('/', postReview);

/* PUT requests: Mark Review as Helpful and Report Review */
reviewsRouter.put('/:review_id/helpful', markAsHelpful);
reviewsRouter.put('/:review_id/report', reportReview);

export default reviewsRouter;

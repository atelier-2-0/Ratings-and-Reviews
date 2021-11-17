const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review_id: Number,
  data: Date,
  rating: Number,
  summary: String,
  body: String,
  recommend: Boolean,
  helpfulness: Number,
  response: String,
  reviewer_name: String,
  reviewer_email: String,
  photos: [{
    photo_id: Number,
    url: String,
  }]
});

const reviewListSchema = new mongoose.Schema({
  product_id: Number,
  reviews: [reviewSchema],
  metadata: {
    recommended: Boolean,
    characteristics: {
      size: {
        id: Number,
        value: Number,
      },
      width: {
        id: Number,
        value: Number,
      },
      comfort: {
        id: Number,
        value: Number,
      },
    },
    ratings: {
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number,
    }
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

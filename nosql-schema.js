const mongoose = require('mongoose');

// code to connect to db not added

const reviewsSchema = new mongoose.Schema({
  product_id: { type: Number, required: true },
  review_id: { type: Number, required: true },
  date: { type: Date, default: Date.now, required: true },
  rating: { type: Number, required: true },
  summary: { type: String, maxLength: 60, required: true },
  body: { type: String, maxLength: 1000, required: true },
  recommend: { type: Boolean, required: true },
  helpfulness: { type: Number },
  response: { type: String, default: null},
  reviewer_name: { type: String, required: true },
  reviewer_email: { type: String, required: true },
  photos: [{
    photo_id: { type: Number }, url: { type: String }
  }],
  characteristics: {
    fit: { id: { type: Number }, value: { type: Number } },
    size: { id: { type: Number }, value: { type: Number } },
    width: { id: { type: Number }, value: { type: Number } },
    length: { id: { type: Number }, value: { type: Number } },
    comfort: { id: { type: Number }, value: { type: Number } },
    quality: { id: { type: Number }, value: { type: Number } },
  },
});

const metadataSchema = new mongoose.Schema({
  product_id: { type: Number, required: true },
  recommended: { true: { type: Number }, false: { type: Number } },
  characteristics: {
    fit: { id: { type: Number }, value: { type: Number } },
    size: { id: { type: Number }, value: { type: Number } },
    width: { id: { type: Number }, value: { type: Number } },
    length: { id: { type: Number }, value: { type: Number } },
    comfort: { id: { type: Number }, value: { type: Number } },
    quality: { id: { type: Number }, value: { type: Number } },
  },
  ratings: {
    1: { type: Number },
    2: { type: Number },
    3: { type: Number },
    4: { type: Number },
    5: { type: Number },
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

const mongoose = require('mongoose');

// code to connect to db not added

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: Number,
    required: true
  },
  data: {
    type: Date,
    default: Date.now,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    maxLength: 60,
    required: true
  },
  body: {
    type: String,
    maxLength: 1000,
    required: true
  },
  recommend: {
    type: Boolean,
    required: true
  },
  helpfulness: {
    type: Number,
    required: false
  },
  response: {
    type: String,
    default: null,
    required: false
  },
  reviewer_name: {
    type: String,
    required: true
  },
  reviewer_email: {
    type: String,
    required: true
  },
  photos: [{
    photo_id: {
      type: Number,
      required: false
    },
    url: {
      type: String,
      required: false
    },
  }]
});

const reviewListSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true
  },
  reviews: [reviewSchema],
  metadata: {
    recommended: {
      true: {
        type: Number,
        required: false
      },
      false: {
        type: Number,
        required: false
      }
    },
    characteristics: {
      size: {
        id: {
          type: Number,
          required: false
        },
        value: {
          type: Number,
          required: false
        },
      },
      width: {
        id: {
          type: Number,
          required: false
        },
        value: {
          type: Number,
          required: false
        },
      },
      comfort: {
        id: {
          type: Number,
          required: false
        },
        value: {
          type: Number,
          required: false
        },
      },
    },
    ratings: {
      1: {
        type: Number,
        required: false
      },
      2: {
        type: Number,
        required: false
      },
      3: {
        type: Number,
        required: false
      },
      4: {
        type: Number,
        required: false
      },
      5: {
        type: Number,
        required: false
      },
    }
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

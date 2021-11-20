export const listReviews = (params, callback) => {
  const {
    page, count, sort, product_id,
  } = params;
  // query goes here
};

export const retrieveMetadata = (params, callback) => {
  const { product_id } = params;
  // query goes here
};

export const addReview = (data, callback) => {
  const {
    product_id, rating, summary, body, recommend,
    name, email, photos, characteristics,
  } = data;
  // query goes here
};

export const updateHelpfulness = (params, callback) => {
  const { review_id } = params;
  // query goes here
};

export const markAsReported = (params, callback) => {
  const { review_id } = params;
  // query goes here
};

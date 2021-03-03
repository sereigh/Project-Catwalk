import React from 'react';
import PropTypes from 'prop-types';

import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewsList = ({minimized, reviews}) => {
  let reviewsList = reviews;

  if (minimized) {
    reviewsList = reviews.slice(0, 2);
  }

  return (
    <div className={minimized ? 'reviews-list' : 'reviews-list maximized'}>
      {reviewsList.map(review => <ReviewListEntry key={review.review_id} review={review} />)}
    </div>
  );
}

ReviewsList.propTypes = {
  minimized: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string
    }))
  }))
}

ReviewsList.defaultProps = {
  reviews: []
}

export default ReviewsList;
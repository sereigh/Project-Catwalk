import React from 'react';
import PropTypes from 'prop-types';

import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewsList = ({minimized, reviews, searchTerm}) => {
  let reviewsList = reviews;

  if (minimized) {
    reviewsList = reviews.slice(0, 2);
  }

  return (
    <div className={minimized ? 'reviews-list' : 'reviews-list maximized'}>
      {reviewsList.map(review => <ReviewListEntry key={review.review_id} review={review} searchTerm={searchTerm} />)}
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
  })),
  searchTerm: PropTypes.string.isRequired
}

ReviewsList.defaultProps = {
  reviews: []
}

export default ReviewsList;
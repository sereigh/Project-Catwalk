import React from 'react';
import PropTypes from 'prop-types';

import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewsList = ({reviews}) => (
  <div>
    {reviews.map(review => <ReviewListEntry key={review.review_id} review={review} />)}
  </div>
);

ReviewsList.propTypes = {
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
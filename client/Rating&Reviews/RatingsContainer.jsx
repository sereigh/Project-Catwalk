import React from 'react';
import PropTypes from 'prop-types';

import Stars from '../SharedComponents/Stars.jsx';

const RatingsContainer = ({reviewData, totalReviews}) => {
  const averageRating = reviewData.ratings ? (
    parseInt(reviewData.ratings['1'], 10)
    + 2 * parseInt(reviewData.ratings['2'], 10)
    + 3 * parseInt(reviewData.ratings['3'], 10)
    + 4 * parseInt(reviewData.ratings['4'], 10)
    + 5 * parseInt(reviewData.ratings['5'], 10)
  ) / totalReviews
  : 1

  return (
    <div className='ratings-container'>
      <span className='average-rating'>{averageRating.toFixed(1)}</span>
      <Stars rating={averageRating} />
    </div>
  )
}

RatingsContainer.propTypes = {
  reviewData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string
    }),
    characteristics: PropTypes.shape({
      Comfort: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Fit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Length: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Quality: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Size: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
      Width: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
      }),
    }),
  }),
  totalReviews: PropTypes.number.isRequired
}

RatingsContainer.defaultProps = {
  reviewData: {

  }
}

export default RatingsContainer;
import React from 'react';
import PropTypes from 'prop-types';

import Stars from '../SharedComponents/Stars.jsx';

import RatingBreakdown from './Breakdowns/RatingBreakdown.jsx';
import CharacteristicBreakdown from './Breakdowns/CharacteristicBreakdown.jsx';

const RatingsContainer = ({reviewData, totalReviews, handleFilter, filters}) => {
  const averageRating = (
    (reviewData.ratings['1'] ? parseInt(reviewData.ratings['1'], 10) : 0)
    + 2 * (reviewData.ratings['2'] ? parseInt(reviewData.ratings['2'], 10) : 0)
    + 3 * (reviewData.ratings['3'] ? parseInt(reviewData.ratings['3'], 10) : 0)
    + 4 * (reviewData.ratings['4'] ? parseInt(reviewData.ratings['4'], 10) : 0)
    + 5 * (reviewData.ratings['5'] ? parseInt(reviewData.ratings['5'], 10) : 0)
  ) / totalReviews

  const recommendPercent = parseInt(reviewData.recommended.true, 10) / totalReviews * 100;

  return (
    <div className='ratings-container'>
      <span className='average-rating'>{averageRating.toFixed(1)}</span>
      <Stars rating={averageRating} />
      <br />
      <br />
      <span>{`${recommendPercent.toFixed(0)}% of reviews recommend this product`}</span>
      <br />
      <br />
      <RatingBreakdown ratings={reviewData.ratings} totalReviews={totalReviews} handleFilter={handleFilter} filters={filters} />
      <br />
      <CharacteristicBreakdown characteristics={reviewData.characteristics} />
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
  }).isRequired,
  totalReviews: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default RatingsContainer;
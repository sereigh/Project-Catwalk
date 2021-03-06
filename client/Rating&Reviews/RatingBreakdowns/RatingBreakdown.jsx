import React from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter.jsx';

const RatingBreakdown = ({ratings, totalReviews, handleFilter}) => {
  const oneStarPercent = parseInt(ratings['1'], 10) / totalReviews * 100;
  const twoStarPercent = parseInt(ratings['2'], 10) / totalReviews * 100;
  const threeStarPercent = parseInt(ratings['3'], 10) / totalReviews * 100;
  const fourStarPercent = parseInt(ratings['4'], 10) / totalReviews * 100;
  const fiveStarPercent = parseInt(ratings['5'], 10) / totalReviews * 100;

  return (
    <div className='filter-container'>
      <Filter rating={5} ratingTotal={ratings['5']} percent={fiveStarPercent} handleFilter={handleFilter} />
      <Filter rating={4} ratingTotal={ratings['4']} percent={fourStarPercent} handleFilter={handleFilter} />
      <Filter rating={3} ratingTotal={ratings['3']} percent={threeStarPercent} handleFilter={handleFilter} />
      <Filter rating={2} ratingTotal={ratings['2']} percent={twoStarPercent} handleFilter={handleFilter} />
      <Filter rating={1} ratingTotal={ratings['1']} percent={oneStarPercent} handleFilter={handleFilter} />
      <button type='button' onClick={() => {handleFilter(0)}}>Reset Filters</button>
    </div>
  )
}

RatingBreakdown.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string
  }).isRequired,
  totalReviews: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired
}
export default RatingBreakdown;
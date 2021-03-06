import React from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter.jsx';

const RatingBreakdown = ({ratings, totalReviews, handleFilter, filters}) => {
  const oneStarPercent = parseInt(ratings['1'], 10) / totalReviews * 100;
  const twoStarPercent = parseInt(ratings['2'], 10) / totalReviews * 100;
  const threeStarPercent = parseInt(ratings['3'], 10) / totalReviews * 100;
  const fourStarPercent = parseInt(ratings['4'], 10) / totalReviews * 100;
  const fiveStarPercent = parseInt(ratings['5'], 10) / totalReviews * 100;

  const filtersObj = {};

  for (let i = 0; i < filters.length; i++) {
    filtersObj[filters[i]] = true;
  }

  return (
    <div className='filter-container'>
      <Filter rating={5} ratingTotal={ratings['5']} percent={fiveStarPercent} handleFilter={handleFilter} filtered={!!filtersObj['5']} />
      <Filter rating={4} ratingTotal={ratings['4']} percent={fourStarPercent} handleFilter={handleFilter} filtered={!!filtersObj['4']} />
      <Filter rating={3} ratingTotal={ratings['3']} percent={threeStarPercent} handleFilter={handleFilter} filtered={!!filtersObj['3']} />
      <Filter rating={2} ratingTotal={ratings['2']} percent={twoStarPercent} handleFilter={handleFilter} filtered={!!filtersObj['2']} />
      <Filter rating={1} ratingTotal={ratings['1']} percent={oneStarPercent} handleFilter={handleFilter} filtered={!!filtersObj['1']} />
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
  handleFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default RatingBreakdown;
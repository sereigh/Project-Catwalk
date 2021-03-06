import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar.jsx';

const RatingBreakdown = ({ratings, totalReviews, handleFilter}) => {
  const oneStarPercent = parseInt(ratings['1'], 10) / totalReviews * 100;
  const twoStarPercent = parseInt(ratings['2'], 10) / totalReviews * 100;
  const threeStarPercent = parseInt(ratings['3'], 10) / totalReviews * 100;
  const fourStarPercent = parseInt(ratings['4'], 10) / totalReviews * 100;
  const fiveStarPercent = parseInt(ratings['5'], 10) / totalReviews * 100;

  return (
    <div className='filter-container'>
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(5)}
        onKeyPress={() => handleFilter(5)}
      >
        <span>5 stars</span>
        <RatingBar percent={fiveStarPercent} />
        <span className='review-total'>{ratings['5']}</span>
      </div>
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(4)}
        onKeyPress={() => handleFilter(4)}
      >
        <span>4 stars</span>
        <RatingBar percent={fourStarPercent} />
        <span className='review-total'>{ratings['4']}</span>
      </div>
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(3)}
        onKeyPress={() => handleFilter(3)}
      >
        <span>3 stars</span>
        <RatingBar percent={threeStarPercent} />
        <span className='review-total'>{ratings['3']}</span>
      </div>
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(2)}
        onKeyPress={() => handleFilter(2)}
      >
        <span>2 stars</span>
        <RatingBar percent={twoStarPercent} />
        <span className='review-total'>{ratings['2']}</span>
      </div>
      <div
        className='filter'
        role='button'
        tabIndex={0}
        onClick={() => handleFilter(1)}
        onKeyPress={() => handleFilter(1)}
      >
        <span>1 stars</span>
        <RatingBar percent={oneStarPercent} />
        <span className='review-total'>{ratings['1']}</span>
      </div>
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
import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar.jsx';

const Filter = ({rating, ratingTotal, percent, handleFilter, filtered}) => (
  <div
    className={filtered ? 'filter filtered' : 'filter'}
    role='button'
    tabIndex={0}
    onClick={() => {handleFilter(rating)}}
    onKeyPress={() => {handleFilter(rating)}}
  >
    <span>{`${rating} stars`}</span>
    <RatingBar percent={percent} />
    <span className='review-total'>{ratingTotal}</span>
  </div>
)

Filter.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingTotal: PropTypes.string,
  percent: PropTypes.number.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filtered: PropTypes.bool.isRequired
}

Filter.defaultProps = {
  ratingTotal: '0'
}

export default Filter;
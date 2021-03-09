import React from 'react';
import PropTypes from 'prop-types';

const RatingSubmit = ({handleRate, overallRating, ratingError}) => (
  <span>
    <span className={ratingError ? 'error' : null}>{'*Overall Rating: '}</span>
    <span
      className='star-submit'
      role='button'
      tabIndex={0}
      onClick={() => handleRate(1)}
      onKeyPress={() => handleRate(1)}
    >
      {overallRating < 1 ? '☆' : '★'}
    </span>
    <span
      className='star-submit'
      role='button'
      tabIndex={0}
      onClick={() => handleRate(2)}
      onKeyPress={() => handleRate(2)}
    >
      {overallRating < 2 ? '☆' : '★'}
    </span>
    <span
      className='star-submit'
      role='button'
      tabIndex={0}
      onClick={() => handleRate(3)}
      onKeyPress={() => handleRate(3)}
    >
      {overallRating < 3 ? '☆' : '★'}
    </span>
    <span
      className='star-submit'
      role='button'
      tabIndex={0}
      onClick={() => handleRate(4)}
      onKeyPress={() => handleRate(4)}
    >
      {overallRating < 4 ? '☆' : '★'}
    </span>
    <span
      className='star-submit'
      role='button'
      tabIndex={0}
      onClick={() => handleRate(5)}
      onKeyPress={() => handleRate(5)}
    >
      {overallRating < 5 ? '☆ ' : '★ '}
    </span>
    <span>
      {
        overallRating === 1 ? 'Poor'
        : overallRating === 2 ? 'Fair'
        : overallRating === 3 ? 'Average'
        : overallRating === 4 ? 'Good'
        : overallRating === 5 ? 'Great'
        : ''
      }
    </span>
  </span>
)

RatingSubmit.propTypes = {
  handleRate: PropTypes.func.isRequired,
  overallRating: PropTypes.number.isRequired,
  ratingError: PropTypes.bool.isRequired
}

export default RatingSubmit;
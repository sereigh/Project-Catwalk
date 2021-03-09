import React from 'react';
import PropTypes from 'prop-types';

const RecommendSubmit = ({handleRecommend, recommendError}) => (
  <span>
    <span className={recommendError ? 'error' : null}>{'*Do you recommend this product? '}</span>
    <span className='recommend-options'>
      <label htmlFor='yes'>
        Yes
        <input type='radio' id='yes' name='recommend' value='yes' onChange={handleRecommend} />
      </label>
      <label htmlFor='no'>
        No
        <input type='radio' id='no' name='recommend' value='no' onChange={handleRecommend} />
      </label>
    </span>
  </span>
)

RecommendSubmit.propTypes = {
  handleRecommend: PropTypes.func.isRequired,
  recommendError: PropTypes.bool.isRequired
}

export default RecommendSubmit;
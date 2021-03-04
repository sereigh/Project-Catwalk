import React from 'react';
import PropTypes from 'prop-types';

const RecommendSubmit = ({handleRecommend}) => (
  <span>
    {'*Do you recommend this product? '}
    <label htmlFor='yes'>
      Yes
      <input type='radio' id='yes' name='recommend' value='yes' onChange={handleRecommend} />
    </label>
    <label htmlFor='no'>
      No
      <input type='radio' id='no' name='recommend' value='no' onChange={handleRecommend} />
    </label>
  </span>
)

RecommendSubmit.propTypes = {
  handleRecommend: PropTypes.func.isRequired
}

export default RecommendSubmit;
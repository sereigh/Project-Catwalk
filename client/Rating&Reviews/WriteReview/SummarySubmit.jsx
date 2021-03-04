import React from 'react';
import PropTypes from 'prop-types';

const SummarySubmit = ({handleSummaryChange}) => (
  <span>
    {'Review Summary: '}
    <input
      className='summary'
      type='text'
      placeholder='Example: Best purchase ever!'
      maxLength={60}
      onChange={handleSummaryChange}
    />
  </span>
)

SummarySubmit.propTypes = {
  handleSummaryChange: PropTypes.func.isRequired
}

export default SummarySubmit;
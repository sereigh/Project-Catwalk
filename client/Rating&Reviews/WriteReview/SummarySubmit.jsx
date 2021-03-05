import React from 'react';
import PropTypes from 'prop-types';

const SummarySubmit = ({handleSummaryChange}) => (
  <span>
    <span>{'Review Summary: '}</span>
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
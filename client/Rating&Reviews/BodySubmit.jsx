import React from 'react';
import PropTypes from 'prop-types';

const BodySubmit = ({handleBodyChange, charactersLeftMessage}) => (
  <span>
    {'*Review Body: '}
    <textarea
      className='review-body'
      placeholder='Why did you like the product or not?'
      maxLength={1000}
      onChange={handleBodyChange}
    />
    <span>{charactersLeftMessage}</span>
  </span>
)

BodySubmit.propTypes = {
  handleBodyChange: PropTypes.func.isRequired,
  charactersLeftMessage: PropTypes.string.isRequired
}

export default BodySubmit;
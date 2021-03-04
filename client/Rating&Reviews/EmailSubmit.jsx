import React from 'react';
import PropTypes from 'prop-types';

const EmailSubmit = ({handleEmailChange}) => (
  <div className='user-detail'>
    <span>{'Email '}</span>
    <input
      className='email'
      type='text'
      maxLength={60}
      onChange={handleEmailChange}
    />
    <span className='small-font'>For authentication reasons, you will not be emailed.</span>
    <br />
  </div>
)

EmailSubmit.propTypes = {
  handleEmailChange: PropTypes.func.isRequired
}

export default EmailSubmit;
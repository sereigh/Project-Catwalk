import React from 'react';
import PropTypes from 'prop-types';

const EmailSubmit = ({handleEmailChange, emailError}) => (
  <div className='user-detail'>
    <span className={emailError ? 'error' : null}>{'*Email '}</span>
    <input
      className='email'
      type='text'
      maxLength={60}
      onChange={handleEmailChange}
    />
    <span className='small-font'>For authentication reasons, you will not be emailed.</span>
  </div>
)

EmailSubmit.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  emailError: PropTypes.bool.isRequired
}

export default EmailSubmit;
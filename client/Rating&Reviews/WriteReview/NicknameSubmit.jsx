import React from 'react';
import PropTypes from 'prop-types';

const NicknameSubmit = ({handleNicknameChange, nicknameError}) => (
  <div className='user-detail'>
    <span className={nicknameError ? 'error' : null}>{'*What is your nickname? '}</span>
    <input
      className='nickname'
      type='text'
      maxLength={60}
      onChange={handleNicknameChange}
    />
    <span className='small-font'>For privacy reasons, do not use your full name or email address.</span>
    <br />
  </div>
)

NicknameSubmit.propTypes = {
  handleNicknameChange: PropTypes.func.isRequired,
  nicknameError: PropTypes.bool.isRequired
}

export default NicknameSubmit;
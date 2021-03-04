import React from 'react';
import PropTypes from 'prop-types';

const NicknameSubmit = ({handleNicknameChange}) => (
  <div className='user-detail'>
    <span>{'*What is your nickname? '}</span>
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
  handleNicknameChange: PropTypes.func.isRequired
}

export default NicknameSubmit;
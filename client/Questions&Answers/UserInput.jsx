import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ text, name, handler }) => (

  <span
    className="UserInput"
    name={name}
    onClick={(e) => {handler(e)}}
    role="button"
    tabIndex={0}
    onKeyPress={() => {handler()}}
  >
    {text}
  </span>
)

UserInput.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default UserInput;

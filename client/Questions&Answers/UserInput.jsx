import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ text, name, handler }) => (

  <div
    className="UserInput"
    name={name}
    onClick={(e) => {handler(e)}}
    role="button"
    tabIndex={0}
    onKeyPress={() => {handler()}}
  >
    {text}
  </div>
)

UserInput.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default UserInput;

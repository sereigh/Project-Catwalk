import React from 'react';
import PropTypes from 'prop-types';

const QAButton = ({ text, name, handler }) => (

  <span
    className="QAButton"
    name={name}
    onClick={() => handler()}
    role="button"
    tabIndex={0}
    onKeyPress={() => handler()}
  >
    {text}
  </span>
)

QAButton.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default QAButton;
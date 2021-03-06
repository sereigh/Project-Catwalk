import React from 'react';
import PropTypes from 'prop-types';

const QAButton = ({ text, handler }) => (

  <span
    className="QAButton"
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
}

export default QAButton;
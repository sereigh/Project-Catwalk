import React from 'react';
import PropTypes from 'prop-types';


function SendFeedback({option, handleFeedback}) {

    const options = ['Report', 'Reported'];
    return (
      <div
        className="feedback"
        onClick={() => handleFeedback(option)}
        onKeyPress={() => handleFeedback(option)}
        role="button"
        tabIndex={0}
      >
        <p>
          Helpful?
          {' '}
          <u>Yes</u>
          (0)
          |
          {' '}
          <u>{options[option]}</u>
        </p>
      </div>
    )
  }

SendFeedback.propTypes = {
  option: PropTypes.number.isRequired,
  handleFeedback: PropTypes.func.isRequired,
}

export default SendFeedback;

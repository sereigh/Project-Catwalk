import React from 'react';
import PropTypes from 'prop-types';


function SendFeedback({ option, handleFeedback }) {

  const options = ['Report', 'Reported', 'Add Answer'];
  return (
    <div className="feedback">
      <p>
        Helpful?
        {' '}
        <span
          onClick={() => console.log('Increase Helpfulness')}
          onKeyPress={() => console.log('Increase Helpfulness')}
          role="button"
          tabIndex={0}
        >
          <u>Yes</u>
        </span>
        (0)
        |
        {' '}
        <span
          onClick={() => handleFeedback()}
          onKeyPress={() => handleFeedback()}
          role="button"
          tabIndex={0}
        >
          <u>{options[option]}</u>
        </span>
      </p>
    </div>
  )
}

SendFeedback.propTypes = {
  option: PropTypes.number.isRequired,
  handleFeedback: PropTypes.func.isRequired,
}

export default SendFeedback;

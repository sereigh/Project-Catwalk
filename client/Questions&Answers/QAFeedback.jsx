import React from 'react';
import PropTypes from 'prop-types';


function QAFeedback({ option, helpfulness }) {

  const options = ['Report', 'Reported', 'Add Answer'];
  return (
    <div className="feedback">
      <p>
        Helpful?
        {' '}
        <span
          id={option}
          onClick={() => console.log('clicked')}
          onKeyPress={() => console.log('clicked')}
          role="button"
          tabIndex={0}
        >
          <u>Yes</u>
        </span>
        (
        {helpfulness}
        )
        |
        {' '}
        <span
          id={option}
          onClick={() => console.log('clicked')}
          onKeyPress={() => console.log('clicked')}
          role="button"
          tabIndex={0}
        >
          <u>{options[option]}</u>
        </span>
      </p>
    </div>
  )
}

QAFeedback.propTypes = {
  option: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
  // handleFeedback: PropTypes.func.isRequired,
}

export default QAFeedback;

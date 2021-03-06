import React from 'react';
import PropTypes from 'prop-types';

const QuestionsFeedback = ({ helpfulness }) => (
  <div className="feedback">
    <p>
      Helpful?
      {' '}
      <span
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
        onClick={() => console.log('clicked')}
        onKeyPress={() => console.log('clicked')}
        role="button"
        tabIndex={0}
      >
        <u>Add Answer</u>
      </span>
    </p>
  </div>
);


function AnswersFeedback({ option, helpfulness }) {

  const options = ['Report', 'Reported'];
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

QuestionsFeedback.propTypes = {
  helpfulness: PropTypes.number.isRequired,
  // handleFeedback: PropTypes.func.isRequired,
}

AnswersFeedback.propTypes = {
  option: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
  // handleFeedback: PropTypes.func.isRequired,
}

export default QuestionsFeedback;
export { AnswersFeedback };

import React from 'react';
import PropTypes from 'prop-types';

const AnswersList = ({answers}) => (
  <ul className="answersList">
    {answers.map((answer) => (
      <li key={answer.id}>
        <span>
          <strong>A:  </strong>
          Some kind of answer.
        </span>
      </li>
    ))}
  </ul>
);

AnswersList.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired
}

export default AnswersList;
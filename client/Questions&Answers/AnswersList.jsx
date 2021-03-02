import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import answers from './answers.js';

const AnswersList = ({ view }) => (
  <ul className="answersList">
    {answers.map((answer) => (
      <li className={`view-${view}`} key={answer.id}>
        <span>
          <strong>A:  </strong>
          Some kind of answer.
        </span>
      </li>
    ))}
  </ul>
);

AnswersList.propTypes = {
  view: PropTypes.bool.isRequired
}

export default AnswersList;
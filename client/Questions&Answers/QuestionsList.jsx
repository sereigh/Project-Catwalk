import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import questions from './questions.js';

import AnswersList from './AnswersList.jsx';

function QuestionsList({ view, toggleView }) {
  return (
    <>
      <ul className="questionList">
        {questions.map((question) => (
          <li
            key={question.id}
            className="question"
            onClick={toggleView}
          >
            <span>
              <h3>
                Q:
                Some kind of question?
              </h3>
            </span>
            <AnswersList view={view} />
          </li>
        ))}
      </ul>
    </>
  );
}

QuestionsList.propTypes = {
  view: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired
}

export default QuestionsList;
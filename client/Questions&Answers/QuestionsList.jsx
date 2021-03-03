import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import questions from './questions.js';

import AnswersList from './AnswersList.jsx';

function QuestionsList() {
  const [view, setView] = useState(false);
  const toggleView = (index) => {
    console.log('clicked')
    if (view === index) {
      return setView(null);
    }
    return setView(index);
  };
  return (
    <>
      <ul className="questionList">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="question"
            onClick={() => toggleView(index)}
            role="button"
            tabIndex={0}
            onKeyPress={() => toggleView(index)}
          >
            <span>
              <h3>
                Q:
                Some kind of question?
              </h3>
            </span>
            {view === index && <AnswersList /> }
          </div>
        ))}
      </ul>
    </>
  );
}

// QuestionsList.propTypes = {
//   view: PropTypes.bool.isRequired,
//   toggleView: PropTypes.func.isRequired
// }

export default QuestionsList;
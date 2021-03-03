import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AnswersList from './AnswersList.jsx';

function QuestionsList({questions, answers}) {
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
      <div className="questionsList">
        {questions.map((question, index) => (
          <div
            key={question.question_id}
            className="question"
            onClick={() => toggleView(index)}
            role="button"
            tabIndex={0}
            onKeyPress={() => toggleView(index)}
          >
            <span>
              <h3>
                Q:
                {' '}
                {question.question_body}
              </h3>
            </span>
            {view === index && <AnswersList answers={answers} /> }
          </div>
        ))}
      </div>
    </>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired
}

export default QuestionsList;
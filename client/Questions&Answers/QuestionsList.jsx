import React from 'react';

import AnswersList from './AnswersList.jsx';

function QuestionsList({ view }) {
  return (
    <>
      <div
        className="question"
        role="button"
      >
        <span>
          <h3>
            Q:
            Some kind of question?
          </h3>
        </span>
      </div>
      <div className="answers">
        <AnswersList />
      </div>
    </>
  );
}

export default QuestionsList;
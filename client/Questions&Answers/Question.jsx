import React from 'react';
// import PropTypes from 'prop-types';

function Question({ questions }) {

  return (
    <div className="questionCard">
      {questions.map((question, index) => (
        <div key={question.question_id} className="question"
          onClick={() => toggleView(index)}
          role="button"
          tabIndex={0}
          onKeyPress={() => toggleView(index)}>
          <span>
            <h3>
              Q:
                {' '}
              {question.question_body}
            </h3>
          </span>
        </div>
      ))}
    </div>
  );
}
import React from 'react';
import PropTypes from 'prop-types';

import Feedback from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx'

function QuestionsList(props) {
  const { questions, postFeedback, active, toggleActive, allQuestions, allAnswers, toggleAll } = props
  const view = ((allQuestions) ? 'enable-scroll' : 'enable-default')

  return (
    <div className="question-container">
      {questions.map((question, i) => (
        <div
          className={view}
          key={question.question_id}
          onClick={toggleActive(i)}
          role="button"
          tabIndex={0}
          onKeyPress={toggleActive(i)}
        >
          <span className="question-text">
            Q:
            {' '}
            {question.question_body}
            <Feedback option={2} helpfulness={question.question_helpfulness} handler={postFeedback('questions', question.question_id, 'helpful')} />
          </span>
          {active.contains(i) && (
          <AnswersList
            answers={sortAnswers(questions[i].answers)}
            postFeedback={postFeedback}
            allAnswers={allAnswers}
            toggleAll={toggleAll}
          />
          )}
        </div>
      ))}
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  toggleActive: PropTypes.func.isRequired,
  active: PropTypes.oneOfType([PropTypes.number]).isRequired,
  postFeedback: PropTypes.func.isRequired,
  allQuestions: PropTypes.bool.isRequired,
  allAnswers: PropTypes.bool.isRequired,
  toggleAll: PropTypes.func.isRequired,
}
export default QuestionsList;


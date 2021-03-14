import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';
import TextLink from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx';
import SearchHighlight from './SearchHighlight.jsx';

function QuestionsList(props) {
  const { questions, toggleAnswers, handleInput, canClick, productName, openIndex, togglePanel, panelIndex, clickedId, query } = props

  return (
    <div className="qa-questions-list">
      {questions.map((question, i) => (
        <div
          className={(openIndex.includes(i) ? 'qa-question-card' : 'qa-no-show')}
          key={question.question_id}
        >
          <div
            className="questionText"
            onClick={() => togglePanel(i)}
            role="button"
            tabIndex={0}
            onKeyPress={() => togglePanel(i)}
          >
            <strong>Q:  </strong>
            {!query || !question.question_body.includes(query) && question.question_body}
            {question.question_body.includes(query) && (<SearchHighlight query={query} body={question.question_body} />)}

          </div>
          <div className="questionFeedback">
            {`   Helpful? `}
            <TextLink
              option={1}
              handler={() => canClick('questions', question.question_id, 'helpful')}
            />
            {` (${question.question_helpfulness})   |   `}
            <u>
              <span className="add-answer">
                <Modal
                  handleInput={handleInput}
                  productName={productName}
                  id={question.question_id}
                  qText={question.question_body}
                  buttonText="Add Answer"
                  type="answer"
                />
              </span>
            </u>
          </div>
          <span
            className="qa-answers-list"
          >
            {panelIndex.includes(i) && (
            <AnswersList
              answers={sortAnswers(questions[i].answers)}
              length={questions[i].answers.length}
              toggleAnswers={toggleAnswers}
              canClick={canClick}
              qId={question.question_id}
              clickedId={clickedId}
              query={query}
            />
)}
          </span>
        </div>
        ))}
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  toggleAnswers: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  canClick: PropTypes.func.isRequired,
  openIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  togglePanel: PropTypes.func.isRequired,
  panelIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  clickedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  query: PropTypes.string.isRequired,
}

export default QuestionsList;

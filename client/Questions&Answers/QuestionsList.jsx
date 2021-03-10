import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';
import TextLink from './UserFeedback.jsx';
// import  from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx';

function QuestionsList(props) {
  const { questions, questionsView, answersView, toggleAccordian, handleInput, postFeedback, productName } = props
  const [panel, setPanel] = useState(false);
  const view = (questionsView === true ? "showAll-questions" : "showDefault-questions")

  const togglePanel = (i) => {
    if (panel === i) {
      return setPanel(null)
    }
    return setPanel(i)
  };

  return (
    <div className={view}>
      <div>
        {questions.map((question, i) => (
          <div
            className="view-question"
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
              {question.question_body}
            </div>
            <div className="questionFeedback">
              {`   Helpful? `}
              <TextLink
                option={1}
                handler={() => postFeedback('questions', question.question_id, 'helpful')}
              />
              {` (${question.question_helpfulness})   |   `}
              <Modal
                handleInput={handleInput}
                productName={productName}
                id={question.question_id}
                qText={question.question_body}
                buttonText="Add Answer"
                type="answer"
              />
            </div>
            <span
              className="answers-per-question"
            >
              {panel === i && (
              <AnswersList
                answers={sortAnswers(questions[i].answers)}
                answersView={answersView}
                toggleAccordian={() => toggleAccordian}
                postFeedback={postFeedback}
              />
)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  questionsView: PropTypes.bool.isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleAccordian: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  postFeedback: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
}

export default QuestionsList;

import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';
import TextLink from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx';

function QuestionsList(props) {
  const { questions, answersView, toggleAnswers, handleInput, canClick, productName, qIndex, aIndex } = props
  // const [panel, setPanel] = useState(false);
  // const view = (questionsView === true ? "showAll-questions" : "showNo-questions")

  // const togglePanel = (i) => {
  //   if (panel === i) {
  //     return setPanel(null)
  //   }
  //   return setPanel(i)
  // };

  return (
    <div className="qa-questions-list">
      {questions.map((question, i) => (
        <div
          className={(i <= qIndex ? 'qa-question-card' : 'qa-no-show')}
          key={question.question_id}
        >
          <div
            className="questionText"
            onClick={() => console.log('toggle panel')}
            role="button"
            tabIndex={0}
            onKeyPress={() => console.log('toggle panel')}
          >
            {/* togglePanel(i) */}
            <strong>Q:  </strong>
            {question.question_body}
          </div>
          <div className="questionFeedback">
            {`   Helpful? `}
            <TextLink
              option={1}
              handler={() => canClick('questions', question.question_id, 'helpful')}
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
            className="qa-answers"
          >
            {/* || i === openIndex  */}
            {i <= qIndex && (
            <AnswersList
              answers={sortAnswers(questions[i].answers)}
              length={questions[i].answers.length}
              answersView={answersView}
              toggleAnswers={toggleAnswers}
              canClick={canClick}
              aIndex={aIndex}
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
  // questionsView: PropTypes.bool.isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleAnswers: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  canClick: PropTypes.func.isRequired,
  qIndex: PropTypes.number.isRequired,
  aIndex: PropTypes.number.isRequired,
}

export default QuestionsList;

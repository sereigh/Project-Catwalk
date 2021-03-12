import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';
import TextLink from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx';

function QuestionsList(props) {
  const { questions, answersView, toggleAnswers, handleInput, canClick, productName, openIndex, togglePanel, panelIndex } = props
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
            className="qa-answers-list"
            // should show default or hide answers based on clicking the question
            // if this question is clicked (q) this answer panel (i) should show
            // it's default view, if it's not clicked, it should stay hidden

            // this list should show if it's the first 4 lists
            // otherwise it should be hidden

            // if this question is clicked, this list should show default
          >
            {/* || i === openIndex  */}
            {panelIndex.includes(i) && (
            <AnswersList
              answers={sortAnswers(questions[i].answers)}
              length={questions[i].answers.length}
              answersView={answersView}
              toggleAnswers={toggleAnswers}
              canClick={canClick}
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
  openIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  togglePanel: PropTypes.func.isRequired,
  panelIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
}

export default QuestionsList;

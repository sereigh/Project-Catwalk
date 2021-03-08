import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Feedback from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './Utility.jsx'

function QuestionsList(props) {

  const { questions, questionsView, answersView, toggleAccordian, postFeedback } = props;

  const [panel, setPanel] = useState(false);

  const togglePanel = (i) => {
    if (panel === i) {
      return setPanel(null);
    }
    return setPanel(i);
  };

  const view = (questionsView === true ? "showAll-questions" : "showDefault-questions");

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
              <Feedback option={2} helpfulness={question.question_helpfulness} handler={() => postFeedback('questions', question.question_id, 'helpful')} />
            </div>
            <span className="answers-per-question">
              {panel === i && <AnswersList answers={sortAnswers(questions[i].answers)} answersView={answersView} toggleAccordian={() => toggleAccordian} postFeedback={postFeedback} />}
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
  postFeedback: PropTypes.func.isRequired
}

export default QuestionsList;

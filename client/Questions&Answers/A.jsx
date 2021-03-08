import React from 'react';
import PropTypes from 'prop-types';

import Feedback, { UserInput, UserInfo } from './UserFeedback.jsx';


function AnswersList(props) {
  const { answers, postInput, allAnswers, toggleAll } = props;
  const view = (allAnswers ? "enable-scroll" : "enable-default");
  const answerText = ((allAnswers) ? 'COLLAPSE ANSWERS' : 'SEE MORE ANSWERS');

  return (
    <div className="answer-container">
      {answers.map((answer) => (
        <div key={answer.id} className={view}>
          <span>
            <strong>A:</strong>
            {answer.body}
          </span>
          <div className="answer-feedback">
            <UserInfo name={answer.answerer_name} seller={false} date={answer.date} />
            <Feedback option={answer.reported ? 1 : 0} helpfulness={answer.helpfulness} handler={postInput} />
          </div>
        </div>
      ))}
      {answers.length > 2 && (<UserInput text={answerText} name="answers" handler={toggleAll} />)}
    </div>
  );
}


AnswersList.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  allAnswers: PropTypes.bool.isRequired,
  toggleAll: PropTypes.func.isRequired,
  postInput: PropTypes.func.isRequired,
}

export default AnswersList;

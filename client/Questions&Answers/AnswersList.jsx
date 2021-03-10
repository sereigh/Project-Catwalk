import React from 'react';
import PropTypes from 'prop-types';

import TextLink, { UserInfo } from './UserFeedback.jsx';

function Answerslist(props) {
  const { answers, toggleAccordian, canClick, aIndex } = props
  // const view = (answersView ? "showAll-answers" : "showDefault-answers")

  return (
    <div className="showAll-answers">
      {answers.map((answer, i) => (
        <div
          key={answer.answer_id}
          className={(i < aIndex ? 'showAll-questions' : 'showNo-questions')}
        >
          <span className="answerText">
            <strong>A:  </strong>
            {answer.body}
          </span>
          <span className="answersFeedback">
            <UserInfo
              name={answer.answerer_name}
              date={answer.date}
            />
            {`   Helpful? `}
            <TextLink
              option={1}
              handler={() => canClick('answers', answer.id, 'helpful')}
            />
            {` (${answer.helpfulness})   |   `}
            {!answer.reported && (
            <TextLink
              option={0}
              handler={() => canClick('answers', answer.id, 'report')}
            />
          )}
          </span>
        </div>
      ))}
      {answers.length > 2 && (
      <span
        className='loadAnswers'
        name="answers"
        onClick={() => {toggleAccordian()}}
        role="button"
        tabIndex={0}
        onKeyPress={() => {toggleAccordian()}}
      >
        LOAD MORE ANSWERS
      </span>
    )}
    </div>
  );
}

Answerslist.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  // answersView: PropTypes.bool.isRequired,
  toggleAccordian: PropTypes.func.isRequired,
  canClick: PropTypes.func.isRequired,
  aIndex: PropTypes.number.isRequired,
}

export default Answerslist;

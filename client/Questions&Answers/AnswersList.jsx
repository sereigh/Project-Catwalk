import React from 'react';
import PropTypes from 'prop-types';

import TextLink, { UserInfo } from './UserFeedback.jsx';

function Answerslist(props) {
  const { answers, toggleAnswers, canClick, aIndex, answersView, q } = props
  const buttonText = (answersView ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS')


  // const length = answers.length;
  // const view = (answersView ? "showAll-answers" : "showDefault-answers")
  return (
    <>
      {answers.map((answer, i) => (
        <div
          key={answer.answer_id}
          // className={(i <= aIndex ? 'qa-answer-card' : 'qa-no-show')}
          className="qa-no-show"
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

      {/* if q === i show all questions */}

      {answers.length > 2 && (
      <span
        className='loadAnswers'
        name="answers"
        onClick={() => toggleAnswers(answers.length)}
        role="button"
        tabIndex={0}
        onKeyPress={() => toggleAnswers(answers.length)}
      >
        {buttonText}
      </span>
    )}
    </>
  );
}

Answerslist.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleAnswers: PropTypes.func.isRequired,
  canClick: PropTypes.func.isRequired,
  aIndex: PropTypes.number.isRequired,
  q: PropTypes.number.isRequired,
}

export default Answerslist;
